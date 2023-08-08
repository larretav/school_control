import { Box, Grid, MenuItem, Pagination, Stack, SxProps, TextField, TextFieldVariants, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { ChangeEvent, ChangeEventHandler, FC, ReactNode, useState } from 'react'
import Center from './Center';

type ComponentPaginatorProps = {
  title: string,
  itemsPerPageOptions?: number[],
  labelItemsPerPage?: string,
  sx?: SxProps,
  inputVariant?: TextFieldVariants | undefined,
  children: ReactNode[],
}

const ComponentPaginator: FC<ComponentPaginatorProps> = ({
  title = 'Título',
  itemsPerPageOptions = [2, 10, 25, 50, 100],
  labelItemsPerPage = 'Items por página:',
  sx = {},
  inputVariant = 'outlined',
  children
}) => {

  console.log(children)
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const handleChangePage = (_: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(+event.target.value);
    setPage(0);
  };

  const getPageCount = () => {
    let numPages = children?.length / itemsPerPage;
    numPages += numPages % 2 == 0 ? 0 : 1
    return Math.trunc(numPages);
  }

  const sxStyle: SxProps = {
    width: '100%',
    p: 2,
    bgcolor: 'common.white',
    borderRadius: 3,
    ...sx
  }

  return (
    <Box sx={sxStyle}>
      <Box >
        {title}
      </Box>

      <Box flexGrow={1} overflow="auto">
        {
          children.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
        }
      </Box>


      <Stack spacing={1}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
          <Typography >{labelItemsPerPage}</Typography>
          <TextField
            size='smallest'
            variant={inputVariant}
            hiddenLabel
            select
            value={itemsPerPage}
            onChange={handleChangeItemsPerPage}
          >
            {
              itemsPerPageOptions.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)
            }
          </TextField>
        </Stack>

        <Center>
          <Pagination
            color="primary"
            size="medium"
            count={getPageCount()}
            onChange={handleChangePage}
            siblingCount={1}
          />
        </Center>
      </Stack>

    </Box>
  )
}

export default ComponentPaginator