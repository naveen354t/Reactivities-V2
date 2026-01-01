import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Link, Typography } from "@mui/material";
// import { useActivities } from "../../lib/hooks/useActivities";
import { AccessTime, Place } from "@mui/icons-material";
import { formatDate } from "../../lib/util";
type ActivityCardProps = {
  activity: Activity;
}

function ActivityCard({ activity}: ActivityCardProps) {
    const isHost=false;
  const isGoing=false;
  const label=isHost ? "You are hosting" : isGoing ? "You are going" : "Join Activity";
  const isCancelled=false;
  const color=isHost ? "secondary" : isGoing ? "warning" : "default";

    // const { deleteActivity } = useActivities();
  return (
<Card elevation={3} sx={{ minWidth: 275, mb:2 }}>
    <Box display="flex" alignItems="center" justifyContent="space-between">
        <CardHeader
           avatar={<Avatar sx={{height: 80,width: 80}} />}
            title={activity.title}
            slotProps={{
                fontWeight: 'bold',
                fontSize: 20,
            }}

            subheader={
                <>
                Hosted by{' '} <Link href={`/profiles/${activity.venue}`}>{activity.venue}</Link>
                </>
            }
        />
        <Box display="flex" flexDirection="column" gap={2} mr={2}>
            {(isHost || isGoing) && (
                <Chip label={label} color={color} sx={{
                    borderRadius:2
                }} />
            )}
            {isCancelled && (
                <Chip label="Cancelled" color="error" sx={{
                    borderRadius:2
                }} />
            )}
        </Box>
    </Box>
<Divider sx={{mb:3}}/>

    <CardContent sx={{p:0}}>
        <Box display="flex" alignItems="center" mb={2} px={2}>
            <Box display='flex' flexGrow={0} alignItems='center'>
           <AccessTime sx={{mr:1}} />
           <Typography variant="body2">{formatDate(activity.date)}</Typography>
            </Box>
           <Place sx={{ml:3, mr:1}} />
            <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider sx={{mb:3}}/>
        <Box display='flex' sx={{backgroundColor:'grey.200', py:3,pl:3, mb:3}}>
          Attendence go here
        </Box>
        <CardActions sx={{pb:2}}>
            <Typography variant="body2" sx={{flexGrow:1}}>{activity.description}</Typography>
            <Box display="flex" gap={3}>
            <Button size="medium" 
            variant="contained" 
            component={Link} 
            href={`/activities/${activity.id}`}
            sx={{display:'flex',justifySelf:'flex-end',borderRadius:3}}>
                View
            </Button>
            </Box>
             </CardActions>
         </CardContent>
  </Card>
    )
}

export default ActivityCard