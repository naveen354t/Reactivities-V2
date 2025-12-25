import { Grid } from "@mui/material"
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity | undefined;
  onCancelSelectActivity: () => void;
  onFormOpen: (id?: string) => void;
  onFormClose: () => void;
  editMode: boolean; 

}

function ActivityDashboard({ activities, selectedActivity, onCancelSelectActivity, onFormOpen, onFormClose, editMode}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={7}>
        <ActivityList activities={activities} />  
      </Grid>
      <Grid size={5}>
       {selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} 
       onCancelSelectActivity={onCancelSelectActivity}
        onFormOpen={onFormOpen}
       />} 
        {editMode &&    
       <ActivityForm closeForm={onFormClose} activity={selectedActivity}
      />
        }
      </Grid>
    </Grid>
  )
}

export default ActivityDashboard