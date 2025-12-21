import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type ActivityListProps = {
    activities:Activity[];
    onSelectActivity: (id: string) => void;
    onDeleteActivity: (id: string) => void;
}
function ActivityList({ activities, onSelectActivity, onDeleteActivity }: ActivityListProps) {
  return (
    <Box>
        {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onSelectActivity={onSelectActivity} onDeleteActivity={onDeleteActivity} />  
        )
        )}
    </Box>
  )
}

export default ActivityList