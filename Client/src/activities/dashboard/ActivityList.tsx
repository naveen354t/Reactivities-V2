import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../lib/hooks/useActivities";
function ActivityList() {
  const {activities: activitiesData, isPending} = useActivities();
  if (!activitiesData || isPending) return <Typography variant="h4" align="center" mt={5}>Loading activities...</Typography>;
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activitiesData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />  
        ))}
    </Box>
  )
}

export default ActivityList