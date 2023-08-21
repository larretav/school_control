// type Props = {}

import { FactCheck, Group, Groups, School, Settings } from "@mui/icons-material"
import StatisticsCard from "./components/StatisticsCard"
import { green, orange, red } from "@mui/material/colors"
import { Grid } from "@mui/material"
import ButtonCard from "./components/ButtonCard"
import { PrivRoutes } from "@/const/routes.const"
import GradeFilled from "@/icons/GradeFilled"
import { useLazyGetSchoolSubjectsQuery } from "@/redux/app/services/school-subjects.service"
import { useEffect } from "react"
import { useLazyGetStudentsQuery } from "@/redux/app/services/students.service"
import { useLazyGetTeachersQuery } from "@/redux/app/services/teachers.service"
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks"
import { dashboardReset, selectStudentsCount, selectSubjectsCount, selectTeachersCount, setStudentsCount, setSubjectsCount, setTeachersCount } from "@/redux/features/dashboard/dashbaordSlice"
import ProgressIndicator from "@/components/ProgressIndicator"

const DashboardPage = () => {

  const dispatch = useAppDispatch();

  const studentsCount = useAppSelector(selectStudentsCount);
  const teachersCount = useAppSelector(selectTeachersCount);
  const subjectsCount = useAppSelector(selectSubjectsCount);

  const [getStudentsQuery, { isLoading: isLoStudents }] = useLazyGetStudentsQuery();
  const [getTeachersQuery, { isLoading: isLoTeachers }] = useLazyGetTeachersQuery();
  const [getSchoolSubjQuery, { isLoading: isLoSubjects }] = useLazyGetSchoolSubjectsQuery();

  const handleGetData = async () => {
    try {
      const studentsResp = await getStudentsQuery().unwrap();
      const teachersResp = await getTeachersQuery().unwrap();
      const subjectsResp = await getSchoolSubjQuery().unwrap();

      dispatch(setStudentsCount(studentsResp.length));
      dispatch(setTeachersCount(teachersResp.length));
      dispatch(setSubjectsCount(subjectsResp.length));


    } catch (error) {

    }
  }

  useEffect(() => {
    handleGetData();

    return () => {
      dispatch(dashboardReset());
    }
  }, [])


  return (
    <>
      <Grid container justifyContent="space-between" spacing={{xs: 2, md: 5}}>
        {
          [
            { title: 'Estudiantes', value: studentsCount, icon: <Groups fontSize="large" />, color: red },
            { title: 'Maestros', value: teachersCount, icon: <Group fontSize="large" />, color: green },
            { title: 'Asignaturas', value: subjectsCount, icon: <School fontSize="large" />, color: orange },
          ].map((item, idx) => <Grid key={item.title + idx} item xs={12} md={4}>
            <StatisticsCard
              title={item.title}
              value={`${item.value}`}
              icon={item.icon} color={item.color}
              isLoading={isLoStudents || isLoTeachers || isLoSubjects}
            />

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
          ].map((item) => <Grid key={item.route} item xs={12} sm={4} md={2}>
            <ButtonCard title={item.title} route={item.route} icon={item.icon} />
          </Grid>
          )
        }
      </Grid>
    </>
  )

}
export default DashboardPage