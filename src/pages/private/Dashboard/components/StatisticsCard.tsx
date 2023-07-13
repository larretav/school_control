import { Avatar, Box, Stack, Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import { FC, ReactNode } from "react"

type Props = {
  title: string,
  icon: ReactNode,
  value: string,
  color: any
}

const StatisticsCard: FC<Props> = ({ title = '', value, icon, color }) => {
  return (
    <Stack spacing={4} sx={{boxShadow: `0 4px 20px -2px rgba(0,0,0,0.25)` }} className="p-6 rounded-3xl box-border bg-white">
      <Typography variant="h6" color={blueGrey[700]} fontWeight={600}>{title.toUpperCase()}</Typography>
      <Stack direction="row"  alignItems="center" spacing={5}>
        <Box className="grid place-items-center" sx={{width: 70, height: 70, borderRadius: 4, bgcolor: color[500], color: 'common.white', boxShadow: `0 3px 15px -3px ${color[400]}` }}>
          {icon}
        </Box>
        <Typography variant="h2" color={blueGrey[700]} fontWeight={500} noWrap className="flex-1">{value}</Typography>
      </Stack>
    </Stack>
  )
}
export default StatisticsCard