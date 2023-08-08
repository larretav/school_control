import '@mui/lab/themeAugmentation';
import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, "components">> = {
  MuiTextField: {
    variants: [
      {
        props: {
          size: 'smallest',
        },
        style: {
          
          '& .MuiInputBase-input': {
            padding: '5px 10px'
          }
        }
      }
    ]
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        minWidth: 'max-content'
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: 20 }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10
      }
    }
  },
  MuiCircularProgress: {
    defaultProps: {
      color: 'primary'
    }
  },
  MuiFab: {
    variants: [
      {
        props: { variant: 'circular', size: 'smallest' },
        style: {
          width: '30px',
          height: '30px',
          minHeight: '26px'
        }
      }
    ],
    styleOverrides: {
      root: {
        boxShadow: '0px',
        '&:hover': {
          boxShadow: 2
        }
      }
    }
  },
  MuiGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create('all', { easing: theme.transitions.easing.easeInOut, duration: theme.transitions.duration.shorter })
      })
    }
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ ownerState, theme }) => theme.unstable_sx({
        width: { xs: 28, sm: 44 },
        height: { xs: 16, sm: 22 },
        p: 0,
        mx: 2,
        '& .MuiSwitch-switchBase': {
          p: 0,
          m: '2px',
          transition: ' 0.3s cubic-bezier(0.42, 0, 0, 1.5)',
          '&.Mui-checked': {
            transform: { xs: 'translateX(12px)', sm: 'translateX(22px)' },
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 0.7,
            },

            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.4,
            },

          },

          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: `${ownerState.color}.main`,
            border: 1,
            borderColor: '#fff',
            borderWidth: { xs: 4, sm: 6 },
          },

          '&.Mui-disabled .MuiSwitch-thumb': {
            opacity: 0.8
          },

        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: { xs: 12, sm: 18 },
          height: { xs: 12, sm: 18 },
        },
        '& .MuiSwitch-track': {
          borderRadius: 13,
          opacity: 0.08
        },
      })
    }
  }
}