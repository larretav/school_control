// React and Hooks
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// Material
import {
  Menu,
  MenuItem,
  Typography,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Fade,
  useTheme,
  useMediaQuery,
  Slide,
} from '@mui/material';
// Icons
import { Logout, Menu as MenuIcon, MoreVert } from '@mui/icons-material';


// Styles
import { userMenuStyle } from '@/styles/header-styles';

// Slices
import { toolbarTitle } from '../styles/header-styles';
import { selectSidebarOpen, setSidebarOpen } from '@/redux/features/layout/layoutSlice';


const Header = () => {

  const theme = useTheme();
  const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const sidebarOpen = useSelector(selectSidebarOpen)

  const handleLogout = () => {
    // logout();
  }

  const handleClickOpenUserMenu = (e: any) => setAnchorEl(e.currentTarget);

  const handleClickCloseUserMenu = () => setAnchorEl(null);

  const toggleDrawer = () => {
    dispatch(setSidebarOpen(!sidebarOpen))
  }


  return (
    <>
      <Slide direction="down" in={mobileMatch} unmountOnExit>

        <AppBar color="secondary" position="static" elevation={1} >
          <Toolbar variant="dense" >

            <Fade in={mobileMatch} unmountOnExit>
              <IconButton onClick={toggleDrawer} >
                <MenuIcon color='white' />
              </IconButton>
            </Fade>


            <Typography variant="h6" noWrap sx={toolbarTitle} >Control escolar</Typography>

            <Box sx={userMenuStyle}>

              <IconButton onClick={handleClickOpenUserMenu}>
                <MoreVert color='white' />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClickCloseUserMenu}
                PaperProps={{ style: { borderRadius: 10 } }}
              >
                <MenuItem onClick={handleLogout} sx={{ mx: 0.5, borderRadius: 2 }} dense>
                  <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon>
                  <ListItemText primary="Cerrar sesión" />
                </MenuItem>
              </Menu>
            </Box>

          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}

export default Header;