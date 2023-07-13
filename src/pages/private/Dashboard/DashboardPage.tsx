// type Props = {}

import { FactCheck, Group, Groups, School, Settings } from "@mui/icons-material"
import StatisticsCard from "./components/StatisticsCard"
import { green, orange, red } from "@mui/material/colors"
import { Grid } from "@mui/material"
import ButtonCard from "./components/ButtonCard"
import { PrivRoutes } from "@/const/routes.const"
import GradeFilled from "@/icons/GradeFilled"

const DashboardPage = () => {

  return (
    <>
      <Grid container justifyContent="space-between" spacing={5}>
        {
          [
            { title: 'Estudiantes', value: "273", icon: <Groups fontSize="large" />, color: red },
            { title: 'Maestros', value: "10", icon: <Group fontSize="large" />, color: green },
            { title: 'Asignaturas', value: "110", icon: <School fontSize="large" />, color: orange },
          ].map((item, idx) => <Grid key={item.title + idx} item xs={12} sm={4}>
            <StatisticsCard title={item.title} value={item.value} icon={item.icon} color={item.color} />
          </Grid>
          )
        }

        {
          [
            { icon: <Groups sx={{ fontSize: 50 }} />, title: 'Estudiantes', route: PrivRoutes.STUDENTS },
            { icon: <Group sx={{ fontSize: 50 }} />, title: 'Maestros', route: PrivRoutes.TEACHERS },
            { icon: <School sx={{ fontSize: 50 }} />, title: 'Asignaturas', route: PrivRoutes.SUBJECTS },
            { icon: <FactCheck sx={{ fontSize: 50 }} />, title: 'Asistencia', route: PrivRoutes.ATTENDANCES },
            { icon: <GradeFilled sx={{ fontSize: 50 }} />, title: 'Calificaciones', route: PrivRoutes.GRADES },
            { icon: <Settings sx={{ fontSize: 50 }} />, title: 'Configuración', route: PrivRoutes.SETTINGS },
          ].map((item) => <Grid key={item.route} item xs={12} sm={2}>
            <ButtonCard title={item.title} route={item.route} icon={item.icon} />
          </Grid>
          )
        }
      </Grid>
    </>
  )

}
export default DashboardPage