import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type ActivityDetailProps = {
    activity: Activity;
    onCancelSelectActivity: () => void;
    onFormOpen: (id?: string) => void;
}
function ActivityDetail({ activity, onCancelSelectActivity, onFormOpen }: ActivityDetailProps) {
  return (
    <Card sx={{  boxShadow:3 ,borderRadius:2}}>
        <CardMedia component="img"
            src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5" >{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight="lighter">{activity.date}</Typography>
            <Typography variant="body1" >{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button size="medium" color="primary" onClick={() => onFormOpen(activity.id)}>Edit</Button>
            <Button size="medium" color="inherit" onClick={onCancelSelectActivity}>Cancel</Button>
        </CardActions>
    </Card>
  )
}

export default ActivityDetail