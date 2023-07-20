import { Box, Stack, SxProps } from '@mui/material'
import { FC, ReactNode } from 'react'

type CenterProps = {
  direction?: 'column' | 'row',
  sx?: SxProps,
  children: ReactNode
}

const Center: FC<CenterProps> = ({ children, direction = "column", sx }) => {
  return (
    <Box width="100%" height="100%" sx={sx} >
      <Stack direction={direction} justifyContent="center" alignItems="center" spacing={2} sx={{width: '100%', height: '100%'}}>
        {children}
      </Stack>
    </Box>
  )
}

export default Center;

