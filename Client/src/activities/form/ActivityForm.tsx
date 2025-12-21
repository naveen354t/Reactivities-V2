import { Box, Paper, TextField, Typography } from "@mui/material"
import type { FormEvent } from "react";
type Props = {
  activity?: Activity;
  closeForm: () => void;
  onSubmitActivity: (activity: Activity) => void;
}
function ActivityForm({ activity, closeForm, onSubmitActivity }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log(data);
    const newActivity: Activity = {
      id: activity?.id || '',
      title: data.Title as string,
      description: data.Description as string,
      category: data.Category as string,
      date: data.Date as string,
      city: data.City as string,
      venue: data.Venue as string,
      isCancelled: false,
      latitude: "",
      longitude: ""
    };
    onSubmitActivity(newActivity);
    // Here you can handle form submission, e.g., send data to the server
    closeForm();
    
  }
  return (
    <Paper sx={{borderRadius:3, boxShadow:3, p:2}}>
       <Typography variant="h4" color="primary" gutterBottom>Create Activity</Typography>
       <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField name="Title" label="Title" defaultValue={activity?.title} />
        <TextField name="Description" label="Description" multiline rows={4} defaultValue={activity?.description} />
        <TextField name="Category" label="Category" defaultValue={activity?.category} />
        <TextField name="Date" label="Date" type="date" defaultValue={activity?.date} />
        <TextField name="City" label="City" defaultValue={activity?.city} />
        <TextField name="Venue" label="Venue" defaultValue={activity?.venue} />
        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <button type="button" color="inherit" onClick={closeForm}>Cancel</button>
            <button type="submit" color="primary">Submit</button>
        </Box>
       </Box>
    </Paper>
  )
}

export default ActivityForm