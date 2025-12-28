import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import type { FormEvent } from "react";
import { useActivities } from "../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";

function ActivityForm() {
  const {id}=useParams<{id:string}>();
  const { updateActivity, createActivity, activity,isActivityLoading } = useActivities(id);
  const navigate=useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data:{ [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if(activity){
      console.log("Updating activity", data);
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    }else{
      console.log("Creating new activity", data);
      const newActivity:Activity = {
        id: crypto.randomUUID(),
        title: data.Title as string,
        description: data.Description as string,
        category: data.Category as string,
        date: new Date(data.Date as string).toISOString(), // ✅ DateTime compatible
        city: data.City as string,
        venue: data.Venue as string,
        latitude: (data.Latitude ?? "0").toString(), // ✅ string
        longitude: (data.Longitude ?? "0").toString(),
        isCancelled: false
      }

      createActivity.mutate(newActivity, {
        onSuccess: (id) => navigate(`/activities/${id}`)
      });
      
    }
    
  }
  if (isActivityLoading) return <Typography variant="h4" align="center" mt={5}>Loading activity...</Typography>;

  return (
    <Paper sx={{borderRadius:3, boxShadow:3, p:2}}>
       <Typography variant="h4" color="primary" gutterBottom>{activity ? "Edit Activity" : "Create Activity"}</Typography>
       <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField name="Title" label="Title" defaultValue={activity?.title} />
        <TextField name="Description" label="Description" multiline rows={4} defaultValue={activity?.description} />
        <TextField name="Category" label="Category" defaultValue={activity?.category} />
        <TextField name="Date" label="Date" type="date" slotProps={{
    inputLabel: {
      shrink: true,
    },
  }} defaultValue={activity?.date} />
        <TextField name="City" label="City" defaultValue={activity?.city} />
        <TextField name="Venue" label="Venue" defaultValue={activity?.venue} />
        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button type="button" color="inherit" onClick={() => navigate('/activities')}>Cancel</Button>
            <Button type="submit" 
            color="success" 
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending} 
            >Submit</Button>
        </Box>
       </Box>
    </Paper>
  )
}

export default ActivityForm

