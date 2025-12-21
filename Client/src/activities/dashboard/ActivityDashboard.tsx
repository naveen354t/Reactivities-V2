import { Grid } from "@mui/material"
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity | undefined;
  onSelectActivity: (id: string) => void;
  onCancelSelectActivity: () => void;
  onFormOpen: (id?: string) => void;
  onFormClose: () => void;
  editMode: boolean;
  onSubmitActivity: (activity: Activity) => void;
  onDeleteActivity: (id: string) => void;

}

function ActivityDashboard({ activities, selectedActivity, onSelectActivity, onCancelSelectActivity, onFormOpen, onFormClose, editMode, onSubmitActivity, onDeleteActivity }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={7}>
        <ActivityList activities={activities} onSelectActivity={onSelectActivity} onDeleteActivity={onDeleteActivity} />    
      </Grid>
      <Grid size={5}>
       {selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} 
       onCancelSelectActivity={onCancelSelectActivity}
        onFormOpen={onFormOpen}
       />} 
        {editMode &&    
       <ActivityForm closeForm={onFormClose} activity={selectedActivity}
        onSubmitActivity={onSubmitActivity} />
        }
      </Grid>
    </Grid>
  )
}

export default ActivityDashboard