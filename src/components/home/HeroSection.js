import { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { Box, Fade, Button, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: 6,
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Car Sale Campaign
          </Typography>
          <Typography variant="h6" gutterBottom>
            We provide many types of car sales, such as intermediate plug-in hybrid car leader, home plug-in hybrid car leader, smart and beautiful new luxury car and so on.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => setOpen(true)}
          >
            Register Now
          </Button>
        </Container>

        <Dialog onClose={() => setOpen(false)} open={open}>

          <DialogTitle>Register</DialogTitle>
          <DialogContent>
            <RegisterForm />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit(onSubmit)} color="primary" autoFocus>
              Register
            </Button>
          </DialogActions> */}
        </Dialog>
      </Box>
    </Fade>
  );
}
