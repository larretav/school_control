import GridPaginator from "@/components/GridPaginator"
import ProgressIndicator from "@/components/ProgressIndicator";
import { useSeed } from "@/data/useSeed"
import { Button, Grid, Stack, Typography } from "@mui/material"

// type Props = {}
const TestsPage = () => {

  const { executeSeedProfCareers, executeSeedSchoolSubjects, executeSeedGroups, executeSeedStudents, isLoading } = useSeed();


  const handleClickProfCareer = async () => {
    try {
      await executeSeedProfCareers();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickSchoolSubjects = async () => {
    try {
      await executeSeedSchoolSubjects();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickSchoolGroups = async () => {
    try {
      await executeSeedGroups();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickStudents = async () => {
    try {
      await executeSeedStudents();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Grid container >
        <Grid item xs={12} md={2}>
          <Stack spacing={2}>

            {/* <Button
              color="esmerald"
              onClick={handleClickProfCareer}
            >
              Init Professional Career
            </Button>

            <Button
              color="secondary"
              onClick={handleClickSchoolSubjects}
            >
              Init School Subjects
            </Button> */}

            {/* <Button
              color="primary"
              onClick={handleClickSchoolGroups}
            >
              Init School Groups
            </Button> */}
            <Button
              color="primary"
              onClick={handleClickSchoolGroups}
            >
              Init School Groups
            </Button>
          </Stack>
        </Grid>


      </Grid>

      <ProgressIndicator isLoading={isLoading} />
    </>
  )
}
export default TestsPage