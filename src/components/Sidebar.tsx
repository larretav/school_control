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
  Avatar
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
import Image from "./Image";

// Assets
import DefaultPorfilePhoto from "@/assets/porfile_photo.png";

// Slices | Selects
import { selectSidebarOpen, setSidebarOpen } from "../redux/features/layout/layoutSlice";


const Sidebar = () => {

  const sidebarMenuOptions = [
    { route: 'dashboard', title: 'Home', icon: <Home /> },
    { route: 'students', title: 'Estudiantes', icon: <Groups />, },
    { route: 'teachers', title: 'Maestros', icon: <People />, },
    { route: 'subjects', title: 'Asignaturas', icon: <School />, },
    { route: 'attendance', title: 'Asistencia', icon: <FactCheck /> },
    { route: 'grades', title: 'Calificaciones', icon: <LocalShipping /> },
    { route: 'notifications', title: 'Notificaciones', icon: <NotificationImportant /> },
    { route: 'settings', title: 'Configuración', icon: <Settings /> },
    { route: 'tests', title: 'Test', icon: <Science /> },
  ]

  const theme = useTheme();
  const mobileMatch = useMediaQuery(theme.breakpoints.up('sm'));

  const isSidebarOpen = useAppSelector(selectSidebarOpen);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleListItemClick = (route: string) => () => {
    navigate(route);
  }

  const handleToggleSidebar = (open: boolean) => (e: any) => {

    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;

    dispatch(setSidebarOpen(open));
  }

  return (
    <Drawer
      key="drawer-sidebar"
      id="drawer-sidebar"
      variant={!mobileMatch ? 'temporary' : 'permanent'}
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
        <Avatar src={DefaultPorfilePhoto} sx={{width: isSidebarOpen ? 150 : null, height: isSidebarOpen ? 150 : null}} />
        {/* <Image src={DefaultPorfilePhoto} width="80%" height={150} /> */}
        <Fade in={isSidebarOpen} unmountOnExit>
          <Typography variant="body2" fontWeight={400}>Laura Díaz Mantel-chan</Typography>
        </Fade>
      </Stack>

      {
        <Box
          role="presentation"
          onClick={handleToggleSidebar(false)}
          onKeyDown={handleToggleSidebar(false)}
        >
          <List sx={sidebarListStyle(isSidebarOpen)} >
            {
              sidebarMenuOptions.map((option) => {

                const isSelected = pathname.indexOf(option.route) != -1;

                return (
                  <Box key={option.route}>
                    <ListItemButton selected={isSelected} sx={listItemButtonStyle} onClick={handleListItemClick(option.route)}>
                      <ListItemIcon sx={listItemIconStyle(isSidebarOpen, isSelected)}>{option.icon}</ListItemIcon>
                      {
                        isSidebarOpen && <ListItemText primary={option.title} />
                      }
                    </ListItemButton>

                  </Box>
                )
              })
            }
          </List>
        </Box>
      }
      <Box flexGrow={1} />
      <Typography component="div" variant="body1" textAlign={isSidebarOpen ? 'right' : 'center'} p={1} >v1.0.0</Typography>
    </Drawer>
  )
}
export default Sidebar;