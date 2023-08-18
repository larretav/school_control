import { useAppDispatch, useAppSelector } from '@/redux/app/hooks'
import { selectOpenNewTeacherDialog, setNewTeacherDialogToggle } from '@/redux/features/teachers/teachersSlice'
import { Close } from '@mui/icons-material'
import { Box, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const NewTeacherDialog = (props: Props) => {

  const dispatch = useAppDispatch();

  const open = useAppSelector(selectOpenNewTeacherDialog);

  const handleClose = () => {
    dispatch(setNewTeacherDialogToggle())
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 12, right: 12 }} > <Close /> </IconButton>
        <Box sx={{ px: 3, pt: { xxs: 6, sm: 4 } }}>
          <Typography variant="body1" fontWeight={600} fontSize={{ xxs: 16, sm: 18 }} >Registro de nuevo maestro</Typography>
        </Box>


        <DialogContent sx={{ pb: 6 }} >

        </DialogContent>


      </Dialog>
    </>
  )
}

export default NewTeacherDialog