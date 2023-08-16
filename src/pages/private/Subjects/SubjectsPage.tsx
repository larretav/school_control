import { Box, Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import PorfileCard from "../../../components/PorfileCard"
import { ChangeEvent, ChangeEventHandler, FC, useEffect } from "react"
import { useLazyGetSchoolSubjectsQuery } from "@/redux/app/services/school-subjects.service"
import ProgressIndicator from "@/components/ProgressIndicator"
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks"
import { selectInpSchoolSubject, selectProfCareerSelected, selectProfessionalCareers, selectSchoolSubjects, selectSchoolSubjectsFilterResults, setInputProfCarrerSelected, setInputSchoolSubject, setProfessionalCareers, setSchoolSubjects } from "@/redux/features/school_subjects/schoolSubjectsSlice"
import GridPaginator from "@/components/GridPaginator"
import { School, Search } from "@mui/icons-material"
import { useLazyGetProfessionalCareerQuery } from "@/redux/app/services/professional-careers.service"

type SubjectsPageProps = {}

const SubjectsPage: FC<SubjectsPageProps> = () => {

  const dispatch = useAppDispatch();
  const schoolSubjects = useAppSelector(selectSchoolSubjectsFilterResults);
  const profCareers = useAppSelector(selectProfessionalCareers);

  // Inputs
  const profCareersSelected = useAppSelector(selectProfCareerSelected);
  const schoolSubject = useAppSelector(selectInpSchoolSubject);

  const [getSchoolSubjectsQuery, { isUninitialized: isUnSchoolSubj, isFetching: isFetchSchoolSubj }] = useLazyGetSchoolSubjectsQuery()
  const [getProfessionalCareersQuery, { isUninitialized: isUnprofCareer, isFetching: isFetchprofCareer }] = useLazyGetProfessionalCareerQuery()


  const handleChangeSchoolSubject = (e: ChangeEvent<HTMLInputElement>) => dispatch(setInputSchoolSubject(e.target.value))
  const handleChangeProfCareer = (e: ChangeEvent<HTMLInputElement>) => dispatch(setInputProfCarrerSelected(e.target.value))

  const getProfessionalCareers = async () => {
    try {
      const profCareerResp = await getProfessionalCareersQuery().unwrap();
      dispatch(setProfessionalCareers(profCareerResp))

    } catch (error) {
      console.log(error);
    }
  }

  const getSchoolSubjects = async () => {
    try {

      const subjectsResp = await getSchoolSubjectsQuery().unwrap();
      dispatch(setSchoolSubjects(subjectsResp))

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfessionalCareers();
    getSchoolSubjects()
  }, [])

  const searchAd = { startAdornment: <InputAdornment position="start"> <Search /> </InputAdornment> }
  console.log(schoolSubjects)
  return (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={400}>Asignaturas</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            size="small"
            variant="filled"
            label="Nombre de la asignatura"
            InputProps={searchAd}
            value={schoolSubject}
            onChange={handleChangeSchoolSubject}
            fullWidth
          />

        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            size="small"
            variant="filled"
            label="Nombre de la carrera"
            value={profCareersSelected}
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
                schoolSubjects.map((sSubj, idx) =>
                  <Grid key={idx} item xs={12} md={6} lg={3} >
                    <Box className="h-32 ">
                      <PorfileCard
                        icon={<School color="primary" />}
                        title={sSubj.name}
                        subtitle={`Semestres: ${sSubj.semester}`}
                        extraData={`Carrera: ${sSubj.professionalCareer.name}`}
                      />
                    </Box>
                  </Grid>
                )
              }

            </GridPaginator>

          </Grid>

        </Grid>
      </Grid>

      <ProgressIndicator isLoading={isUnSchoolSubj || isFetchSchoolSubj} />
    </>
  )
}
export default SubjectsPage