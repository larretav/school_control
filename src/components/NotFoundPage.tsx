import { ArrowBack } from '@mui/icons-material'
import { Button, Typography, Box, Stack } from '@mui/material'

import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

  const navigate = useNavigate();

  const boxPageStyle = {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    bgcolor: '#e0e0e0',
  }

  const containerStyle = {
    p: 5,
    borderRadius: 8,
    bgcolor: '#e0e0e0',
    boxShadow: '30px 30px 60px #a2a2a2, -30px -30px 60px #ffffff'
  }

  const buttonStyle = {
    borderRadius: 3,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4
  }

  return (
    <Box sx={boxPageStyle}>
      <Stack spacing={3} justifyContent="center" alignItems="center" sx={containerStyle}>
        <Typography variant="h3" fontWeight="bold">404</Typography>
        <Typography variant="h6" color="grey.600">Página no encontrada</Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<ArrowBack />}
          fullWidth
          onClick={() => navigate(-1)}
          sx={buttonStyle}
        >
          REGRESAR
        </Button>
      </Stack>
    </Box>
  )
}

export default NotFoundPage;