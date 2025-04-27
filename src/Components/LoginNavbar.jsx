import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';


export const LoginNavbar = () => {
  return (
    <>
      <AppBar sx={{ position: 'absolute', width: '100%', backgroundColor: '#444658' }}>
        <Toolbar>
             <img src="src/Assets/logo.png" alt="logo" style={{ width: "80px", height: "50px" }} />

           <Typography
            sx={{ fontSize: "20px", fontWeight: "bolder", flexGrow: 1 }}
          >
            API Mashup Composer
          </Typography>

          <Box>
            <Link to="/LoginSignup">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'none',
                ':hover': {
                  backgroundColor: '#FF5733',
                },
              }}
            >
              Login
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};