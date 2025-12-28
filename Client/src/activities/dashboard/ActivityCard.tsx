import { Box, Button, Card, CardActions, CardContent, Chip, Link, Typography } from "@mui/material";
import { useActivities } from "../../lib/hooks/useActivities";

type ActivityCardProps = {
  activity: Activity;
}

function ActivityCard({ activity}: ActivityCardProps) {
    const { deleteActivity } = useActivities();
  return (
<Card sx={{ minWidth: 275, mb:2 }}>  
    <CardContent>  
        <Typography variant="h5">{activity.title}</Typography>
        <Typography  color="text.secondary" gutterBottom>
            {activity.date}
        </Typography>
        <Typography variant="body2">
            {activity.description}
        </Typography>
        <Typography variant="subtitle2">
            Location: {activity.city}, {activity.venue}
        </Typography>
        <CardActions  sx={{display:'flex', justifyContent:'space-between', pb:2}}>   
            <Chip label={activity.category} variant="outlined" />
            <Box display="flex" gap={2}>
            <Button size="medium" variant="contained" component={Link} href={`/activities/${activity.id}`}>View</Button>
            <Button size="medium" color="error" variant="contained" onClick={() => deleteActivity.mutateAsync(activity.id)} disabled={deleteActivity.isPending}>Delete</Button>
            </Box>
             </CardActions>
         </CardContent>
  </Card>
    )
}

export default ActivityCard