import CustomAutocomplete from "@/components/CustomAutocomplete"
import { Grid } from "@mui/material"

type Props = {}

const StudentsPage = (props: Props) => {

  // const options = [
  //   'Pepe el toro',
  //   'Pedro infante'
  // ]

  // const handleChange = (e, value) => {
    
  // }

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          {/* <CustomAutocomplete options={options} onChange={handleChange} /> */}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>

        </Grid>
      </Grid>
    </>
  )
}
export default StudentsPage