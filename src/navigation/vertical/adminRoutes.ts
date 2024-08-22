// ** Icon imports
import FormatListNumbered from 'mdi-material-ui/FormatListNumbered'
import Sale from 'mdi-material-ui/PointOfSale'
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import CubeOutline from 'mdi-material-ui/CubeOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { Phone } from '@mui/icons-material';
import { PhoneIncoming } from 'mdi-material-ui';

const adminNavigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'MENU PRINCIPAL DE OPCIONES'
    },

    {
      
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/Dashboard'
    },
    {
      title: 'Usuarios',
      icon: AccountCogOutline,
      path: '/Users'
    },
   
    {
      title: 'Clientes',
      icon:AccountPlusOutline,
      path: '/Clients'
    },
    // {
    // title: 'Productos',
    // icon: FormatListNumbered,
    // path: '/Products'
    // },
    // {
    // title: 'Lista de Ventas',
    // icon: Sale,
    // path: '/Sales'
    // },
    {
      title: 'Guia-Encomiendas',
      icon: CubeOutline,///AccountFileTextOutline,
      path: '/Serviceys'
    },
    {
      title: 'Venta Pasajes',
      icon: ShoppingBagIcon,
      path: '/Purchases'
     },
    //{
      //title: 'Mantenimiento',
      //icon: AccountCogOutline,
      //path: '/Maintenances'
    //},
      {
      title: 'Choferes',
      icon: GroupsIcon,
      path: '/Providers'
    },
    
    {
      title: 'Inventario',
      icon: GraphicEqIcon,
      path: '/Inventory'
    },
    {
      title: 'Sobre Nosotros',
      icon: GroupsIcon,
      path: '/Inventory'
    },
    {
      title: 'Contactos',
      icon:PhoneIncoming,
      path: '/Inventory'
    },
  ]
}

export default adminNavigation
