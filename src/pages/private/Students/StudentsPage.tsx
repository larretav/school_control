import CustomAutocomplete from "@/components/CustomAutocomplete"
import { Box, Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import PorfileCard from "../../../components/PorfileCard"
import { Person2Outlined, School, Search } from "@mui/icons-material"
import GridPaginator from "@/components/GridPaginator"
import ProgressIndicator from "@/components/ProgressIndicator"
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks"
import { selectInpStudent, selectProfCareerSelected, selectProfessionalCareers, selectStudents, selectStudentsFilterResults, setInputProfCarrerSelected, setInputStudent, setProfessionalCareers, setStudents } from "@/redux/features/students/studentsSlice"
import { useLazyGetProfessionalCareerQuery } from "@/redux/app/services/professional-careers.service"
import { ChangeEvent, useEffect } from "react"
import { useLazyGetStudentsQuery } from "@/redux/app/services/students.service"

type Props = {}

const StudentsPage = (props: Props) => {

  const dispatch = useAppDispatch()

  const students = useAppSelector(selectStudentsFilterResults);
  const profCareers = useAppSelector(selectProfessionalCareers);
  // Inputs
  const inpProfCareersSelected = useAppSelector(selectProfCareerSelected);
  const inpStudent = useAppSelector(selectInpStudent);

  const [getStudentsQuery, { isUninitialized: isUnStudents, isFetching: isFetchStudents }] = useLazyGetStudentsQuery();
  const [getProfessionalCareersQuery, { isUninitialized: isUnProfCareer, isFetching: isFetchProfCareer }] = useLazyGetProfessionalCareerQuery();

  const handleChangeStudent = (e: ChangeEvent<HTMLInputElement>) => dispatch(setInputStudent(e.target.value))
  const handleChangeProfCareer = (e: ChangeEvent<HTMLInputElement>) => dispatch(setInputProfCarrerSelected(e.target.value))

  const getProfessionalCareers = async () => {
    try {
      const profCareerResp = await getProfessionalCareersQuery().unwrap();
      dispatch(setProfessionalCareers(profCareerResp))

    } catch (error) {
      console.log(error);
    }
  }


  const getStudents = async () => {
    try {

      const studentsResp = await getStudentsQuery().unwrap();
      dispatch(setStudents(studentsResp));

    } catch (error) {
      console.log(error);
    }
  }


  const searchAd = { startAdornment: <InputAdornment position="start"> <Search /> </InputAdornment> }

  useEffect(() => {
    getStudents();
    getProfessionalCareers();
  }, [])

  return (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={400}>Estudiantes</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            size="small"
            variant="filled"
            label="Nombre del estudiante"
            InputProps={searchAd}
            value={inpStudent}
            onChange={handleChangeStudent}
            fullWidth
          />

        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            size="small"
            variant="filled"
            label="Nombre de la carrera"
            value={inpProfCareersSelected}
            onChange={handleChangeProfCareer}
            fullWidth
            select
          >
            <MenuItem value="Todos">Todas</MenuItem>
            {
              profCareers.map((career) => <MenuItem key={career.id} value={career.name} >{career.name}</MenuItem>)
            }
          </TextField>

        </Grid>

        <Grid container item alignItems="center" height="calc(100vh - (64px + 32px + 80px + 24px))">
          <Grid item xs={12} className="h-full">
            <GridPaginator gridProps={{ spacing: 1 }} sx={{ bgcolor: 'transparent' }} >
              {
                students.map((student, idx) =>
                  <Grid key={idx} item xs={12} md={6} lg={3} >
                    <Box className="h-32 ">
                      <PorfileCard
                        icon={<School color="primary" />}
                        title={student.user.fullName}
                        subtitle={`Grupo: ${student.schoolGroup}`}
                        extraData={`Correo: ${student.user.email}`}
                      />
                    </Box>
                  </Grid>
                )
              }

            </GridPaginator>

          </Grid>

        </Grid>
      </Grid>

      <ProgressIndicator isLoading={isUnStudents || isFetchStudents} />
    </>
  )
}
export default StudentsPage