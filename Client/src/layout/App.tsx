import {useState } from "react";
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from "./NavBar";
import ActivityDashboard from "../activities/dashboard/ActivityDashboard";
import { useActivities } from "../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities: activitiesData } = useActivities();

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleFormOpen = (id?: string) => {
   
    setEditMode(true);
    console.log(id);
  }
  const handleFormClose = () => {
    setEditMode(false);
  } 


  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
    <CssBaseline />
    <NavBar openForm={handleFormOpen} />
    <Container maxWidth="xl" sx={{mt:3}}>
      <ActivityDashboard activities={activitiesData || []} 
      selectedActivity={selectedActivity}
      onCancelSelectActivity={handleCancelSelectActivity}
      onFormOpen={handleFormOpen}
      onFormClose={handleFormClose} 
      editMode={editMode}
      />
    </Container>
    </Box>
  )
}

export default App
