import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import ProviderList from 'src/components/Provider/ListProvider'
import InsertPovider from 'src/components/Provider/InsertProvider'

const Provider = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
            Lista De Registro De Choferes
        </Typography>
        <InsertPovider/>
      </Grid>
  
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Choferes' titleTypographyProps={{ variant: 'h6' }} /> 
          <ProviderList/>
        </Card>
      </Grid>

    </Grid>
  )
}

export default Provider