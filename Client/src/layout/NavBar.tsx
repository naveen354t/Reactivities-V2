import { Group} from "@mui/icons-material";
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";
type Props = {
  openForm: (id?: string) => void;
}
export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7ac 89%)'}}>
        <Container maxWidth="xl">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>   
                <Box>
                    <MenuItem sx={{display:'flex',gap:2}}>
                    <Group />
                    <Typography variant="h4" component="div" fontWeight={"bold"}>
                        Reactivities
                    </Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display:'flex', gap:4}}>
                    <MenuItem sx={{fontSize: '18px', fontWeight: 'bold',textTransform:'uppercase'}}>
                        Activities
                    </MenuItem>
                    <MenuItem sx={{fontSize: '18px', fontWeight: 'bold',textTransform:'uppercase'}}>
                        About
                    </MenuItem>
                    <MenuItem sx={{fontSize: '18px', fontWeight: 'bold',textTransform:'uppercase'}}>
                        Contact
                    </MenuItem>
                </Box>
                <Button size="large" color="warning" variant="contained" onClick={() => openForm()}>Create Activity</Button>
            </Toolbar>
        </Container>
    </AppBar>
  </Box>
  );
}