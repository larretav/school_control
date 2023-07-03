import { SxProps } from "@mui/material";

export const sidebarHeaderStyle = (isOpen: boolean): SxProps => ({
  pt: 2,
  pb: 10,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 1,
  flexDirection: 'row',
  maxHeight: '3rem',
})

export const drawerStyle = (isOpen: boolean, mobileMatch: boolean): SxProps => {

  const width = !mobileMatch
    ? isOpen ? 230 : 0
    : isOpen ? 230 : 60

  return {
    overflowX: 'hidden',
    '.MuiDrawer-paper': {
      position: 'static',
      width,
      bgcolor: 'primary.dark',
      color: 'common.white',
      overflowX: 'hidden',
      transition: mobileMatch ? 'width 100ms ease-in-out' : 'initial'
    }
  };
}

export const sidebarListStyle = (isOpen: boolean): SxProps => ({
  px: isOpen ? 2 : 1
})

export const listItemButtonStyle = {
  my: 0.5,
  py: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  '&:hover': {
    bgcolor: '#ffffff18'
  }
}

export const sidebarSubmenuListStyle = (isOpen: boolean): SxProps => ({
  my: 0.5,
  py: 0.2,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  '&:hover': {
    bgcolor: '#ffffff18'
  }
});

export const listItemIconStyle = (isOpen: boolean, isSelected: boolean): SxProps => ({
  minWidth: '28px',
  pr: isOpen ? 2 : 0,
  color: 'grey.100',
  justifyContent: 'center',
})

export const sublistItemIconStyle = (isOpen: boolean, isSelected: boolean): SxProps => ({
  minWidth: '28px',
  pr: isOpen ? 2 : 0,
  color: isSelected ? 'primary.dark' : 'grey.500',
  justifyContent: 'center',
})