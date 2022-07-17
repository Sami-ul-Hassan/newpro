import React from 'react'
import { ROUTES } from './RoutesPath'

const Login = React.lazy(() => import('../Auth/Login'))
const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'))
const DeliverySheet = React.lazy(() => import('../Pages/DeliverySheets/DeliverySheet'))
const AllPickup = React.lazy(() => import('../Pages/Pickups/AllPickup'))
const TodayPickup = React.lazy(() => import('../Pages/Pickups/TodayPickup'))


const routes = [
  // { path: ROUTES.login, exact: true, name: 'Login', component: Login },

  { path: ROUTES.dashboard, exact: true, name: 'Dashboard', component: Dashboard },
  { path: ROUTES.develiverysheet, exact: true, name: 'DeliverySheet', component: DeliverySheet },
  { path: ROUTES.allpickup, exact: true, name: 'AllPickup', component: AllPickup },
  { path: ROUTES.todaypickup, exact: true, name: 'TodayPickup', component: TodayPickup },

  

  
]

export default routes