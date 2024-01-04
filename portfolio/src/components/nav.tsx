import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Nav() {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{marginTop:'20px'}}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Prasanna Kumar
          </Typography>
          <Button variant="outlined" color="inherit" style={{ borderColor: '#F0F8FF', color: '#F0F8FF' }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
