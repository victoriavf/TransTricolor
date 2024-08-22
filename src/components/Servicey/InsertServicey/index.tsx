import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useAddNewServiceyMutation } from 'src/api/Servicey/serviceyApi'
import Link from '@mui/material/Link'
import CloudUploadIcon from 'mdi-material-ui/CloudUpload'
import { styled } from '@mui/material/styles'
import { Autocomplete, IconButton } from '@mui/material'
import { useGetAllClientQuery } from 'src/api/clientApi'

const InsertServicey = () => {

  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const initialValuesInputs = {
    id:66, 
    serviceType:'',
    description:'',
    amount:0,
    idUser: 3,
    estado:0,
    remitente:'',
    consignatario:'',
    chofer:'',
    idAssignedMaintenanceUser: 1, 
    statusMaintenance: false, 
    fechaRecepcion: ''
    
    //client: {"id": 1,"nitCi": "76576","businessName": "liss","phoneNumber": 67868,"estado": 0}
  }
  interface Client {
    nitCi: string;
    businessName: string;
    phoneNumber: number;
    fechaRecepcion:Date;
    remitente:string,
    consignatario:string

   
  }

  const [inputsValues, setInputsValues] = useState(initialValuesInputs);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setInputsValues({
      ...inputsValues,
      [name]: value
    })
    console.log('..', inputsValues)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
    setInputsValues(initialValuesInputs);
  }

  const [addNewServicey, { isLoading, isError }] = useAddNewServiceyMutation();
  const { data: clients} = useGetAllClientQuery();


  const handleAddServicey = async () => {
    try {
      console.log('yyyy', initialValuesInputs)
      console.log('333', inputsValues)
      await addNewServicey(inputsValues).unwrap()
      handleClose()
      setInputsValues(initialValuesInputs)
      
    } catch (error) {
      console.log(error)
    }
  }
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  
  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
         Nueva Encomienda
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
       
        <DialogContent>
        <Button >FORMULARIO DE REGISTRO - GUIA DE ENCOMIENDA </Button>

        <Grid container spacing={6} style={{ paddingTop: '5px' }}>     
        <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='date'
                label='Fecha Recepcion'
                name='fechaRecepcion'
                value={inputsValues.fechaRecepcion}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid  item xs={12} sm={6}>
          <TextField  label='Destino'/>
          </Grid>
                     
        
            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={clients ? clients : []}
                getOptionLabel={(option: Client) => option.businessName}
                renderInput={params => (
                  <TextField
                    {...params}
                    label='Buscar   Remente (Cliente)'
                    variant='outlined'
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name='NombreConsig'                          
                label='Nombre Consignatario'                
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                name='description'
                value={inputsValues.description}
                onChange={handleInputChange}
                fullWidth
                label='Descripcion'              
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                type='number'
                label='Importe Bs.'
                name='amount'
                value={inputsValues.amount}
                onChange={handleInputChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  name='nombreChofer'         
                label='Nombre Chofer'              
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <h4>Nombre De Usuario</h4>
            <label>Victoria</label>
            </Grid>                 
          </Grid>          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleAddServicey} disabled={isLoading} variant='contained' autoFocus>
            {isLoading ? 'Añadiendo Encomienda...' : 'Guardar Registro Encomienda'}
          </Button>
          {isError && <div> Error add Servicey </div>}
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InsertServicey
