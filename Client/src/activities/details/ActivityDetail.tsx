import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../lib/hooks/useActivities";


function ActivityDetail() {
    const navigate=useNavigate();
    const {id}= useParams<{id:string}>();
    // Fetch activity details based on the id
    const {activity, isActivityLoading} = useActivities(id);
    if (isActivityLoading) return <Typography variant="h4" align="center" mt={5}>Loading activity details...</Typography>;
    if (!activity) return <Typography variant="h4" align="center" mt={5}>Activity not found</Typography>;
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
            <Button size="medium" color="primary" component={Link} to={`/manage/${activity.id}`}>Edit</Button>
            <Button size="medium" color="inherit" onClick={() => navigate('/activities')}>Cancel</Button>
        </CardActions>
    </Card>
  )
}

export default ActivityDetail