import GridPaginator from "@/components/ComponentPaginator"
import { Stack, Typography } from "@mui/material"

// type Props = {}
const TestsPage = () => {




  return (
    <GridPaginator title="Paginación prueba" >
      {
        [1,2,3,4,5,6,7,8,9].map((item, idx) => <Typography>{`Texto ejemplo ${idx}`}</Typography>)
      }
    </GridPaginator>
  )
}
export default TestsPage