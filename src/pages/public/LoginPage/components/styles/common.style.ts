import { SxProps } from "@mui/material"

export const signinContainer: SxProps = {
  width: { xs: '100%', md: '35%', xl: '30%' },
  height: { xs: '100%', md: 'auto' },
  position: 'relative',
  bgcolor: 'grey.100'
}

export const signinForm: SxProps = {
  py: { xs: 3 },
  px: { xs: 5, md: 6 },
  zIndex: 2
}

export const signupContainer: SxProps = {
  width: { xs: '100%', md: '50%' },
  height: { xs: '100%', md: 'auto' },
  position: 'relative',
  bgcolor: 'grey.100'
}

export const signupForm: SxProps = {
  width: '90%',
  py: { xs: 2 },
  px: { xs: 2, md: 4 },
  zIndex: 2
}