import {  Grid, Typography } from "@mui/material";

import { useParams } from "react-router";
import { useActivities } from "../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";


function ActivityDetailPage(){
    const {id}= useParams<{id:string}>();
    // Fetch activity details based on the id
    const {activity, isActivityLoading} = useActivities(id);
    if (isActivityLoading) return <Typography variant="h4" align="center" mt={5}>Loading activity details...</Typography>;
    if (!activity) return <Typography variant="h4" align="center" mt={5}>Activity not found</Typography>;
  return (
      <Grid container spacing={3}>
        <Grid size={8}>
          <ActivityDetailsHeader activity={activity} />
          <ActivityDetailsInfo activity={activity}/>
          <ActivityDetailsChat/>
        </Grid>
        <Grid size={4}>
            <ActivityDetailsSidebar/>
        </Grid>
      </Grid>
  )
}

export default ActivityDetailPage