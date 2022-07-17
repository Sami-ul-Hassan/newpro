// import admin from './../../assets/images/Admin-portal-svg/admin-icon.svg'
// import clientSetup from './../../assets/images/Admin-portal-svg/client-setup-icon.svg'
// import dashboard from './../../assets/images/Admin-portal-svg/dashboard-icon.svg'
// import database from './../../assets/images/Admin-portal-svg/database-icon.png'
// import insurance from './../../assets/images/Admin-portal-svg/insurance-icon.svg'
// import coding from './../../assets/images/Admin-portal-svg/coding-icon.svg'
// import institutional from './../../assets/images/Admin-portal-svg/institutional-icon.svg'
// import edi from './../../assets/images/Admin-portal-svg/edi-code-icon.svg'
// import receiver from './../../assets/images/Admin-portal-svg/receiver-setup-icon.svg'
// import datamigration from './../../assets/images/Admin-portal-svg/data-migration-icon.svg'
// import settings from './../../assets/images/Admin-portal-svg/settings-icon.svg'
// import user from './../../assets/images/Admin-portal-svg/user-icon.png'
// import client from './../../assets/images/Admin-portal-svg/client-icon.png'
// import team from './../../assets/images/Admin-portal-svg/team-icon.png'
import Dashboard from '../../assets/sidebar/dashboardlogo.png'
import Pickup from '../../assets/sidebar/pickup.png'
import DeliverySheet from '../../assets/sidebar/delivery.png'


let SideMenu = [
  {
    key: 1,
    value: 'Dashboard',
    label: 'Dashboard',
    icon: 'icon-home',
     image: Dashboard,
    active: true,
    rights: true,
    path: '/dashboard',
    isSubMenuOpen: false,
    SubMenu: [],
  },
  {
    key: 2,
    value: 'Pickups',
    label: 'Pickups',
    icon: 'icon-diamond',
     image: Pickup,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/allpickup',
    SubMenu: [
      {
        key: 21,
        value: 'AllPickup',
        label: 'AllPickup',
        // icon: "",
        // image: database,
        active: false,
        rights: true,
        path: '/allpickup',
      },
      {
        key: 22,
        value: 'TodayPickup',
        label: 'TodayPickup',
        // icon: "",
        // image: client,
        active: false,
        rights: true,
        path: '/todaypickup',
      },
   
    ],
  },
  {
    key: 3,
    value: 'DeliverySheet',
    label: 'DeliverySheet',
    icon: 'icon-coding',
     image: DeliverySheet,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/devilerysheet',
    SubMenu: [],
  
  
  },
  {
    key: 3,
    value: 'DeliverySheet',
    label: 'DeliverySheet',
    icon: 'icon-coding',
     image: DeliverySheet,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/devilerysheet',
    SubMenu: [],
  
  
  },
  {
    key: 3,
    value: 'DeliverySheet',
    label: 'DeliverySheet',
    icon: 'icon-coding',
     image: DeliverySheet,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/devilerysheet',
    SubMenu: [],
  
  
  },



   


]

export { SideMenu }