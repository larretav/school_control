import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useAppSelector } from "../redux/app/hooks"
import { reset, selectCount, setDecrement, setIncrement } from "../redux/features/counter/counterSlice"
import { useAppDispatch } from "../redux/app/hooks"


const Counter = () => {

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const handleClickIncrement = () => {
    dispatch(setIncrement())
  }

  const handleClickDecrement = () => {
    dispatch(setDecrement())
  }

  const handleClickReset = () => {
    dispatch(reset())
  }

  console.log('render');


  return (
    <>
      <Box className="w-screen grid place-items-center">
        <Stack spacing={2} >
          <Typography variant="h6" className="text-center rounded-md bg-blue-300 text-green-900">{count}</Typography>

          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleClickIncrement} fullWidth className="rounded-xl">+</Button>
            <Button variant="contained" color="warning" onClick={handleClickReset} fullWidth className="rounded-xl" >Reset</Button>
            <Button variant="contained" color="secondary" onClick={handleClickDecrement} fullWidth className="rounded-xl">-</Button>
          </Stack>

          <Button variant="contained" color="primary" >Primary</Button>
          <Button variant="contained" color="secondary" >Secondary</Button>
          <Button variant="contained" color="success" >Success</Button>
          <Button variant="contained" color="error" >Error</Button>
          <Button variant="contained" color="warning" >Warning</Button>
          <Button variant="contained" color="teal" >Teal</Button>
          {/* <Button variant="contained" color="purple" >Purple</Button>
          <Button variant="contained" color="esmerald" >Esmerald</Button> */}
          <TextField
            label="uwu"
            variant="outlined"
            color="primary"
            size="small"
          />
          <TextField
            label="uwu"
            variant="standard"
            color="esmerald"
          />
          <TextField
            label="uwu"
            variant="filled"
            color="esmerald"
          />

        </Stack>
      </Box>
    </>
  )
}
export default Counter