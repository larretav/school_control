// React and Hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";


// Material
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Typography,
  Stack,
  Fade,
  Avatar,
  Collapse
} from "@mui/material"

// Icons
import {
  Menu as MenuIcon,
  Groups,
  LocalShipping,
  Settings,
  People,
  School,
  FactCheck,
  NotificationImportant,
  Home,
  Science,
  Logout,
} from "@mui/icons-material";

// Theme
import { useTheme } from '@mui/material/styles';


// Styles
import {
  drawerStyle,
  listItemButtonStyle,
  listItemIconStyle,
  sidebarListStyle
} from '@/styles/sidebar-styles';

// Components
// import Image from "./Image";

// Assets
import DefaultPorfilePhoto from "@/assets/porfile_photo.png";

// Slices | Selects
import { selectSidebarOpen, setSidebarOpen } from "../redux/features/layout/layoutSlice";
import { PrivRoutes } from "@/const/routes.const";
import { selectUserData } from "@/redux/features/auth/authSlice";
import { useLogout } from "@/hooks/useLogout";
import ProgressIndicator from "./ProgressIndicator";


const Sidebar = () => {

  const sidebarMenuOptions = [
    { route: PrivRoutes.DASHBOARD, title: 'Home', icon: <Home /> },
    { route: PrivRoutes.STUDENTS, title: 'Estudiantes', icon: <Groups />, },
    { route: PrivRoutes.TEACHERS, title: 'Maestros', icon: <People />, },
    { route: PrivRoutes.SUBJECTS, title: 'Asignaturas', icon: <School />, },
    { route: PrivRoutes.ATTENDANCES, title: 'Asistencia', icon: <FactCheck /> },
    { route: PrivRoutes.GRADES, title: 'Calificaciones', icon: <LocalShipping /> },
    { route: PrivRoutes.NOTIFICATIONS, title: 'Notificaciones', icon: <NotificationImportant /> },
    { route: PrivRoutes.SETTINGS, title: 'Configuración', icon: <Settings /> },
    { route: PrivRoutes.TESTS, title: 'Test', icon: <Science /> },
  ]

  const theme = useTheme();
  const mobileMatch = useMediaQuery(theme.breakpoints.down('md'));

  const isSidebarOpen = useAppSelector(selectSidebarOpen);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { logout, isLoading } = useLogout();

  const userData = useAppSelector(selectUserData);


  const handleListItemClickLogout = () => {
    logout();
  }

  const handleListItemClick = (route: string) => () => {
    if (mobileMatch)
      dispatch(setSidebarOpen(false));
    navigate(route);
  }

  const handleToggleSidebar = (open: boolean) => (e: any) => {

    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;

    dispatch(setSidebarOpen(open));
  }

  return (
    <>

      <Drawer
        key="drawer-sidebar"
        id="drawer-sidebar"
        variant={mobileMatch ? 'temporary' : 'permanent'}
        open={isSidebarOpen}
        onClose={handleToggleSidebar(false)}
        sx={drawerStyle(isSidebarOpen, mobileMatch)}
      >

        <Stack justifyContent="center" alignItems="flex-end" className="p-3 box-border">
          <Box>
            <IconButton onClick={handleToggleSidebar(!isSidebarOpen)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} className="mt-2 mb-6">
          <Avatar src={DefaultPorfilePhoto} sx={{ width: isSidebarOpen ? 100 : null, height: isSidebarOpen ? 100 : null }} />
          <Fade in={isSidebarOpen} unmountOnExit>
            <Typography variant="body2" fontWeight={400}>{userData}</Typography>
          </Fade>
        </Stack>

        {
          <Box
            role="presentation"
            // onClick={handleToggleSidebar(false)}
            // onKeyDown={handleToggleSidebar(false)}
            className="overflow-auto"
          >
            <List sx={sidebarListStyle(isSidebarOpen)} className="overflow-auto">
              {
                sidebarMenuOptions.map((option) => {

                  const isSelected = pathname.indexOf(option.route) != -1;

                  return (
                    <ListItemButton key={option.route} selected={isSelected} sx={listItemButtonStyle} onClick={handleListItemClick(option.route)}>
                      <ListItemIcon sx={listItemIconStyle(isSidebarOpen, isSelected)}>{option.icon}</ListItemIcon>


                      <ListItemText primary={
                        <Collapse in={isSidebarOpen} timeout={{ enter: 400, exit: 0 }} orientation="horizontal" unmountOnExit>
                          <Typography variant="body1">{option.title}</Typography>
                        </Collapse>
                      } />
                    </ListItemButton>

                  )
                })
              }

            </List>
          </Box>
        }
        <Box flexGrow={1} />
        <List sx={sidebarListStyle(isSidebarOpen)} className="overflow-hidden">

          <ListItemButton sx={listItemButtonStyle} onClick={handleListItemClickLogout}>
            <ListItemIcon sx={listItemIconStyle(isSidebarOpen, false)} ><Logout /></ListItemIcon>

            <ListItemText primary={
              <Collapse in={isSidebarOpen} timeout={{ enter: 400, exit: 0 }} orientation="horizontal" unmountOnExit>
                <Typography variant="body1">Cerrar sesión</Typography>
              </Collapse>
            } />
          </ListItemButton>
        </List>
        <Typography component="div" variant="body1" textAlign={isSidebarOpen ? 'right' : 'center'} p={1} >v1.0.0</Typography>
      </Drawer>

      <ProgressIndicator isLoading={isLoading} />
    </>
  )
}
export default Sidebar;