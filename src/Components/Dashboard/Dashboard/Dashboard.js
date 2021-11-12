import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
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
import MakeAdmin from '../MakeAmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
import useAuth from '../../hook/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import ManageCars from '../../ManageCars/ManageCars';
import Pay from '../Pay/Pay';


const drawerWidth = 240;

function Dashboard(props) {

     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);

     const { admin, logOut } = useAuth()

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
               <Nav>
                    <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/pay`}> <h3><i class="far fa-credit-card me-3 "></i></h3>PAY</Nav.Link>
               </Nav>

               {
                    admin && <Box>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/addCar`}> <h3><i class="fas fa-car me-3 "></i></h3> Add a new car</Nav.Link>
                         </Nav>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/makeAdmin`}> <h3><i class="fas fa-user-shield me-3 "></i> </h3> Make Admin</Nav.Link>
                         </Nav>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/AllOrders`}> <h3><i class="fas fa-folder-minus me-3 "></i></h3> Manage All Orders</Nav.Link>
                         </Nav>
                         <Nav>
                              <Nav.Link className="navbar text-dark" as={HashLink} to={`${url}/manageCar`}> <h3><i class="fas fa-tasks me-3"></i></h3> Manage All Cars</Nav.Link>
                         </Nav>
                    </Box>

               }
               <Nav>
                    <Nav.Link onClick={logOut} className="navbar text-dark" as={HashLink} to={`${url}`}> <h3><i class="fas fa-sign-out-alt me-3"></i></h3>Log-Out</Nav.Link>
               </Nav>


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
                              <img className='w-75' src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/banner-tracking.png" alt="" />
                         </Route>
                         <AdminRoute path={`${path}/addCar`}>
                              <AddACar></AddACar>
                         </AdminRoute>
                         <AdminRoute path={`${path}/makeAdmin`}>
                              <MakeAdmin></MakeAdmin>
                         </AdminRoute>
                         <AdminRoute path={`${path}/AllOrders`}>
                              <AllOrders></AllOrders>
                         </AdminRoute>
                         <AdminRoute path={`${path}/manageCar`}>
                              <ManageCars></ManageCars>
                         </AdminRoute>
                         <Route path={`${path}/myOrders`}>
                              <MyOders></MyOders>
                         </Route>
                         <Route path={`${path}/pay`}>
                              <Pay></Pay>
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