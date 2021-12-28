import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import useAuth from '../../../hooks/useAuth';

export default function NavBar() {
    const { logout, user } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        BD Book Shop
                    </Typography>
                    <NavLink to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink to="/explore"><Button color="inherit">Explore</Button></NavLink>


                    {
                        user?.email ? <Box>
                            <NavLink to="/dashboard"><Button color="inherit">DashBoard</Button></NavLink>
                            <Button sx={{ color: 'white' }}>Name : {user.displayName}</Button>
                            <NavLink to="/"><Button onClick={logout} color="inherit">Log Out</Button></NavLink>
                        </Box>
                            :
                            <NavLink to="login"><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
