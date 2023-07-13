// React, Hooks and Redux
import { Outlet } from "react-router-dom"


// Material
import { Box, SxProps } from "@mui/material"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { blueGrey } from "@mui/material/colors"

// Components

// Utils

// Redux Slices


// Services

const outletStyles: SxProps = {
  height: {xs: 'calc(100vh - 48px)', sm: '100vh'},
  py: 4,
  px: { xs: 1.5, sm: 4 },
  bgcolor: blueGrey[50],
  boxSizing: 'border-box',
  overflowY: 'auto',
}


const AuthLayout = () => {

  return (
    <>
      <Box sx={{ minHeight: '100vh', display: 'flex' }}>

        <Sidebar />
        
        <Box className="w-full flex flex-col" >
          <Header />
          <Box sx={outletStyles}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default AuthLayout