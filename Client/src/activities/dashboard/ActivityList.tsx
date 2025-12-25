import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type ActivityListProps = {
    activities:Activity[];
}
function ActivityList({ activities}: ActivityListProps) {
  return (
    <Box>
        {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />  
        )
        )}
    </Box>
  )
}

export default ActivityList