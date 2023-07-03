// React, Hooks and Redux
import { Outlet } from "react-router-dom"


// Material
import { Box} from "@mui/material"
import Sidebar from "./Sidebar"

// Components

// Utils

// Redux Slices


// Services


const AuthLayout = () => {

  return (
    <>
      <Box sx={{ minHeight: '100vh', display: 'flex' }}>

        <Sidebar />

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>

          <Box sx={{ height: '100vh', py: 4, px: { xxs: 1.5, sm: 4 }, boxSizing: 'border-box', overflowY: 'auto' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default AuthLayout