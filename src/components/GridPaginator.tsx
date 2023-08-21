import { Box, Grid, GridProps, MenuItem, Pagination, Stack, SxProps, TextField, TextFieldVariants, Typography } from '@mui/material'
import React, { ChangeEvent, FC, ReactNode, createElement, useEffect, useState } from 'react'
import Center from './Center';

type GridPaginatorProps = {
  title?: string,
  itemsPerPageOptions?: number[],
  labelItemsPerPage?: string,
  sx?: SxProps,
  inputVariant?: TextFieldVariants | undefined,
  gridProps: GridProps,
  children: ReactNode[],
}

const GridPaginator: FC<GridPaginatorProps> = ({
  title,
  itemsPerPageOptions = [10, 25, 50, 100],
  labelItemsPerPage = 'Elementos por página:',
  sx = {},
  inputVariant = 'outlined',
  gridProps,
  children
}) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0])

  const handleChangePage = (_: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(+event.target.value);
    setPage(1);
  };

  const handleReset = () => {
    setPage(1);
    setItemsPerPage(itemsPerPageOptions[0]);
  }

  const getPageCount = () => Math.ceil(children.length / itemsPerPage);

  const sxStyle: SxProps = {
    width: '100%',
    height: '100%',
    px: 2,
    bgcolor: 'common.white',
    borderRadius: 3,
    boxSizing: 'border-box',
    ...sx
  }

  useEffect(() => {
    handleReset()
  }, [children.length])

  return (
    <Stack direction="column" spacing={2} sx={sxStyle}>
      {
        title && <Box>
          {title}
        </Box>
      }



      <Grid container {...gridProps} alignItems="self-start" justifyContent="flex-start" flex={1} className="overflow-y-auto overflow-x-hidden ">
        {
          children.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage)
        }
      </Grid>

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
            page={page}
            count={getPageCount()}
            onChange={handleChangePage}
            siblingCount={1}
          />
        </Center>
      </Stack>

    </Stack>
  )
}

export default GridPaginator