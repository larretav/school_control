import CustomAutocomplete from "@/components/CustomAutocomplete"
import { Box, Grid, Typography } from "@mui/material"
import PorfileCard from "./components/PorfileCard"
import { Person2Outlined } from "@mui/icons-material"

type Props = {}

const StudentsPage = (props: Props) => {

  // const options = [
  //   'Pepe el toro',
  //   'Pedro infante'
  // ]

  // const handleChange = (e, value) => {

  // }

  return (
    <Box>
      <Box py={2}>
        <Typography variant="h5" fontWeight={400}>Estudiantes</Typography>
      </Box>

      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <PorfileCard icon={<Person2Outlined />} name="Pedro Perez" email="pp@gmail.com" extraData="304" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>

        </Grid>
      </Grid>
    </Box>
  )
}
export default StudentsPage