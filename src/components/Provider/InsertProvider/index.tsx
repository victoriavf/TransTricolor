import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import {Box} from '@mui/material'
import { useState } from 'react'
import { useAddNewProviderMutation } from 'src/api/providerApi'

const InsertProvider = () => {
  const [open, setOpen] = useState(false)
  const [nitCi, setNitCi] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');


  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [createNewProvider] = useAddNewProviderMutation()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addProvider = async (e:any) => {
    e.preventDefault();

    const values = {id:1, nitCi, businessName, address, phoneNumber}
    const res =  await createNewProvider(values).unwrap();

    if (res) {
      console.log('Chofer registrado con exito')
      handleClose()
      setNitCi('')
      setBusinessName('')
      setPhoneNumber('')
      setAddress('') 
    } else {
     console.log('Error')
    }
  }
  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Registrar Chofer
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>{'Registrar nuevo Chofer'}</DialogTitle>
        <DialogContent>
          <Box onSubmit={addProvider} component="form">
            <Grid container spacing={7} style={{ marginTop: '1px' }}>
              <Grid item xs={12} sm={6}>               
                <TextField required fullWidth type='text' label='Nro De CI' value={nitCi} onChange={(e)=>setNitCi(e.target.value)}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth type='text' label='Nombre Completo' value={businessName} onChange={(e)=>setBusinessName(e.target.value)} />
              </Grid>              
              <Grid item xs={12} sm={6}>
              <TextField required fullWidth type='number'   label='Nro De Celular' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField required fullWidth type='text' label='Dirección' value={address} onChange={(e)=>setAddress(e.target.value)} />
              </Grid>
            </Grid>
         <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant='contained' type='submit'  autoFocus>
              Añadir
            </Button>
          </DialogActions> 
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default InsertProvider