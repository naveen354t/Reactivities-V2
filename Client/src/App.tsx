import { useEffect, useState } from "react";
import axios from "axios";
import { Typography,ListItem,ListItemText } from '@mui/material';
import './App.css'
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

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

  return (
    <>
     <Typography variant="h1" component="h2">Reactivities</Typography>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>
      ))}
    </>
  )
}

export default App
