import { Backdrop, CircularProgress } from "@mui/material"
import { FC } from "react"

type ProgressIndicatorProps = {
  isLoading: boolean
}

const ProgressIndicator: FC<ProgressIndicatorProps> = ({ isLoading = false }) => {
  return (
    <Backdrop open={isLoading} sx={{zIndex: 9999}}>
      <CircularProgress color="primary" size={50} />
    </Backdrop>
  )
}
export default ProgressIndicator