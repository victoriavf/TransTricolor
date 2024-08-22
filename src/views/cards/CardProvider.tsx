// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

// ** Icons Imports
import PersonIcon from '@mui/icons-material/Person';

const CardProvider = (data:any) => {

  return (
    <Card sx={{ border: 0, boxShadow: 2, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <PersonIcon sx={{ marginRight: 2.5 }} />
          Proveedor
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="left"
          alignItems="start"
          spacing={1}
        >
        <Typography
          variant='body2'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          Nombre Completo: {data.data.businessName}
        </Typography>
        <Typography
          variant='body2'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          Nro De  CI : {data.data.nitCi}
        </Typography>        
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardProvider
