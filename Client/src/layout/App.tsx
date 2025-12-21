import {useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from "./NavBar";
import ActivityDashboard from "../activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(activities[0]);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7182/api/activities')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
      return () => {
        setActivities([]);
      } 
      
  }, []);

  const handleSelectActivity = (id: string) => {
    const activity = activities.find(a => a.id === id) || undefined;
    setSelectedActivity(activity);
  };
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleFormOpen = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  }
  const handleFormClose = () => {
    setEditMode(false);
  } 
  const handleSubmitActivity = (activity: Activity) => {
    if (activity.id) {
      setActivities([...activities.filter(a => a.id !== activity.id), activity]);
      setSelectedActivity(activity);
    } else {
      activity.id = crypto.randomUUID();
      setActivities([...activities, activity]);
      setSelectedActivity(activity);
    }
    setEditMode(false);
  }
  //delete activity function can be added here
  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(a => a.id !== id));
    if (selectedActivity?.id === id) {
      handleCancelSelectActivity();
    }
  }

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
    <CssBaseline />
    <NavBar openForm={handleFormOpen} />
    <Container maxWidth="xl" sx={{mt:3}}>
      <ActivityDashboard activities={activities} 
      selectedActivity={selectedActivity}
      onSelectActivity={handleSelectActivity}
      onCancelSelectActivity={handleCancelSelectActivity}
      onFormOpen={handleFormOpen}
      onFormClose={handleFormClose} 
      editMode={editMode}
      onSubmitActivity={handleSubmitActivity}
      onDeleteActivity={handleDeleteActivity}
      />
    </Container>
    </Box>
  )
}

export default App
