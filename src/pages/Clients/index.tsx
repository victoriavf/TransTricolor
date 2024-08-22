import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Card from '@mui/material/Card'
import InsertClient from 'src/components/Client/InsertClient'
import ClientList from 'src/components/Client/ClientList'



const Client = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          LISTA DE CLIENTES
        </Typography>

        <InsertClient />
      </Grid>

      <Grid item xs={12}>
        <Card>
    
          <ClientList />
        </Card>
      </Grid>

    </Grid>
    
  
  )
}

export default Client

