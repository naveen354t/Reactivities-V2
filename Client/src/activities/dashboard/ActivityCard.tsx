import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

type ActivityCardProps = {
  activity: Activity;
  onSelectActivity: (id: string) => void;
  onDeleteActivity: (id: string) => void;
}

function ActivityCard({ activity, onSelectActivity, onDeleteActivity }: ActivityCardProps) {
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
            <Button size="medium" variant="contained" onClick={() =>onSelectActivity(activity.id)}>View</Button>
            <Button size="medium" color="error" variant="contained" onClick={() => onDeleteActivity(activity.id)}>Delete</Button>
            </Box>
             </CardActions>
         </CardContent>
  </Card>
    )
}

export default ActivityCard