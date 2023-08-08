import ComponentPaginator from "@/components/ComponentPaginator"
import { useElementDimensions } from "@/utils/useElementDimensions"
import { Stack, Typography } from "@mui/material"

// type Props = {}
const TestsPage = () => {




  return (
    <ComponentPaginator title="Paginación prueba" >
      <Typography>Texto ejemplo</Typography>
      <Typography>Texto ejemplo</Typography>
      <Typography>Texto ejemplo</Typography>
      <Typography>Texto ejemplo</Typography>
      <Typography>Texto ejemplo</Typography>
      <Typography>Texto ejemplo</Typography>
    </ComponentPaginator>
  )
}
export default TestsPage