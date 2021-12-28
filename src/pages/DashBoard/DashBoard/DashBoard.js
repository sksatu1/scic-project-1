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
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

import { textAlign } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../../Home/Review/Review';
import Pay from '../Pay/Pay';
import AddAdmin from '../../AddAdmin/AddAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddReview from '../AddReview/AddReview';


const drawerWidth = 240;

function DashBoard(props) {
    const { logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    //------------------------------------------------ nested route -----------------------------------------
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    const { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {/* <Button onClick={logout}>Log out</Button> */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link to='/'><Button>Home</Button></Link>

                {admin &&
                    <Box>
                        <Link to={`${url}/addAdmin`}><Button>Add Admin</Button></Link>
                        <br />
                        <Link to={`${url}/addProduct`}><Button>Add Product</Button></Link>
                        <br />
                        <Link to={`${url}/allOrders`}><Button>All Orders</Button></Link>
                        <br />
                        <Link to={`${url}/manageProducts`}><Button>Manage Products</Button></Link>
                    </Box>

                }

                {!admin && <Box>
                    <Link to={`${url}/myOrders`}><Button>My Orders</Button></Link>
                    <br />
                    <Link to={`${url}/review`}><Button>Add Review</Button></Link>
                    <br />
                    <Link to={`${url}/pay`}><Button>Pay</Button></Link>
                    <br />
                </Box>}
                <Link to='/'><Button onClick={logout}>Log out</Button></Link>
            </Box>
        </div >
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
                        DashBoard
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
                        <DashBoardHome></DashBoardHome>
                    </Route>

                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>

                    <Route path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </Route>

                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>

                    <AdminRoute path={`${path}/addAdmin`}>
                        <AddAdmin></AddAdmin>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
