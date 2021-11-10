import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import MyOders from '../../MyOrders/MyOders';

import {
     Switch,
     Route,
     useRouteMatch
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
import AddACar from '../../AddCars/AddACar';
import makeAdmin from '../MakeAmin/MakeAdmin';
import MakeAdmin from '../MakeAmin/MakeAdmin';
import Button from '@restart/ui/esm/Button';
import Calendar from '../Calendar/Calendar';
import useFirebase from '../../hook/useFirebase';
import AdminRoute from '../../AdminRoute/AdminRoute';
import useAuth from '../../hook/useAuth';


const drawerWidth = 240;

function Dashboard(props) {
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);

     const { admin } = useAuth()

     let { path, url } = useRouteMatch();

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };

     const drawer = (
          <div>
               <Toolbar />
               <Divider />

               <Nav>
                    <Nav.Link className="navbar text-dark " as={HashLink} to='/'> <h3><i class="fas fa-house-user me-3"></i></h3>Back to Home</Nav.Link>
               </Nav>
               <Nav>
                    <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/myOrders`}> <h3><i class="fas fa-shopping-cart me-3 "></i></h3> MY ORDERS</Nav.Link>
               </Nav>
               {
                    admin && <Box>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/addCar`}> <h3><i class="fas fa-car me-3 "></i></h3> Add a new car</Nav.Link>
                         </Nav>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/makeAdmin`}> <h3><i class="fas fa-user-shield me-3 "></i> </h3> Make Admin</Nav.Link>
                         </Nav>
                    </Box>

               }


          </div>
     );

     const container = window !== undefined ? () => window().document.body : undefined;

     return (
          <Box sx={{ display: 'flex' }}>
               <CssBaseline />
               <AppBar
                    position="fixed"
                    sx={{
                         width: { sm: `calc(100% - ${drawerWidth}px)` },
                         ml: { sm: `${drawerWidth}px` },
                    }}
               >
                    <Toolbar>
                         <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              edge="start"
                              onClick={handleDrawerToggle}
                              sx={{ mr: 2, display: { sm: 'none' } }}
                         >
                              <MenuIcon />
                         </IconButton>
                         <Typography variant="h6" noWrap component="div">
                              Dasboard
                         </Typography>
                    </Toolbar>

               </AppBar>
               <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
               >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                         container={container}
                         variant="temporary"
                         open={mobileOpen}
                         onClose={handleDrawerToggle}
                         ModalProps={{
                              keepMounted: true, // Better open performance on mobile.
                         }}
                         sx={{
                              display: { xs: 'block', sm: 'none' },
                              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                         }}
                    >
                         {drawer}
                    </Drawer>
                    <Drawer
                         variant="permanent"
                         sx={{
                              display: { xs: 'none', sm: 'block' },
                              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                         }}
                         open
                    >
                         {drawer}
                    </Drawer>
               </Box>
               <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
               >
                    <Toolbar />

                    <Switch>
                         <Route exact path={path}>
                              {/* <Calendar></Calendar> */}
                         </Route>
                         <AdminRoute path={`${path}/addCar`}>
                              <AddACar></AddACar>
                         </AdminRoute>
                         <AdminRoute path={`${path}/makeAdmin`}>
                              <MakeAdmin></MakeAdmin>
                         </AdminRoute>
                         <Route path={`${path}/myOrders`}>
                              <MyOders></MyOders>
                         </Route>
                    </Switch>

               </Box>
          </Box>
     );
}

Dashboard.propTypes = {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window: PropTypes.func,
};

export default Dashboard;