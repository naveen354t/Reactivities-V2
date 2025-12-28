import { Grid} from "@mui/material"
import ActivityList from "./ActivityList";

function ActivityDashboard() {
  
  return (
    <Grid container spacing={2}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>
        {/* Right column content can go here */}
        activities filters or summary
      </Grid>
    </Grid>
  )
}

export default ActivityDashboard