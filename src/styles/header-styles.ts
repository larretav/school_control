import { SxProps } from "@mui/material"

export const toolbarTitle: SxProps = {
  pl: { sm: 4 },
  fontSize: { xxs: 16, sm: 20 },
  flexGrow: 1,
  textAlign: { xxs: 'center', sm: 'left' },
}

export const userMenuStyle: SxProps = {
  flexGrow: 0
}

export const badgeStyle: SxProps = {
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: '0 0 0 2px #fff',
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}