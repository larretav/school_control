import CustomAutocomplete from "@/components/CustomAutocomplete"
import { Box, Button, Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import PorfileCard from "../../../components/PorfileCard"
import { Add, Person2Outlined, School, Search } from "@mui/icons-material"
import GridPaginator from "@/components/GridPaginator"
import ProgressIndicator from "@/components/ProgressIndicator"
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks"
import { selectInpStudent, selectProfCareerSelected, selectProfessionalCareers, selectStudents, selectStudentsFilterResults, setInputProfCarrerSelected, setInputStudent, setProfessionalCareers, setStudents } from "@/redux/features/students/studentsSlice"
import { useLazyGetProfessionalCareerQuery } from "@/redux/app/services/professional-careers.service"
import { ChangeEvent, useEffect } from "react"
import { useLazyGetStudentsQuery } from "@/redux/app/services/students.service"
import { selectInpTeacher, selectTeachersFilterResults, setInputTeacher, setTeachers } from "@/redux/features/teachers/teachersSlice"
import { useLazyGetTeachersQuery } from "@/redux/app/services/teachers.service"

type Props = {}

const TeachersPage = (props: Props) => {

  const dispatch = useAppDispatch()

  const teachers = useAppSelector(selectTeachersFilterResults);
  // Inputs
  const inpTeacher = useAppSelector(selectInpTeacher);

  const [getTeacherQuery, { isUninitialized: isUnTeacher, isFetching: isFetchTeacher }] = useLazyGetTeachersQuery();

  const handleChangeTeacher = (e: ChangeEvent<HTMLInputElement>) => dispatch(setInputTeacher(e.target.value))

  const getTeachers = async () => {
    try {

      const teachersResp = await getTeacherQuery().unwrap();
      console.log(teachers)
      dispatch(setTeachers(teachersResp));

    } catch (error) {
      console.log(error);
    }
  }


  const searchAd = { startAdornment: <InputAdornment position="start"> <Search /> </InputAdornment> }

  useEffect(() => {
    getTeachers();
  }, [])

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={400}>Maestros</Typography>
        </Grid>

        <Grid container item xs={12} md={8} columnSpacing={3}>

          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              variant="filled"
              label="Nombre del maestro"
              InputProps={searchAd}
              value={inpTeacher}
              onChange={handleChangeTeacher}
              fullWidth
            />

          </Grid>
        </Grid>


        <Grid item xs={12} md={2}>
          <Button
            color="teal"
            startIcon={<Add />}
            fullWidth
          >
            Nuevo
          </Button>
        </Grid>

        <Grid container item alignItems="center" height="calc(100vh - (64px + 32px + 80px + 24px))">
          <Grid item xs={12} className="h-full">
            <GridPaginator gridProps={{ spacing: 1 }} sx={{ bgcolor: 'transparent' }} >
              {
                teachers.map((teacher, idx) => {

                  const groups = teacher.schoolGroups.map(group => `${group.schoolYear}-0${group.groupNumber}`)

                  return <Grid key={idx} item xs={12} md={6} lg={3} >
                    <Box className="h-32 ">
                      <PorfileCard
                        icon={<School color="primary" />}
                        title={teacher.user.fullName}
                        subtitle={`Grupos: ${groups.join(', ')}`}
                        extraData={`Correo: ${teacher.user.email}`}
                      />
                    </Box>
                  </Grid>
                })
              }

            </GridPaginator>

          </Grid>

        </Grid>
      </Grid>

      <ProgressIndicator isLoading={isUnTeacher || isFetchTeacher} />
    </>
  )
}
export default TeachersPage