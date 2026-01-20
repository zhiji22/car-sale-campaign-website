import { Container, Typography } from '@mui/material';
import Navbar from "@/components/layout/Navbar";

 const Success = () => {
  return (
    <>
        <Navbar />
        <Container>
            <Typography variant="h4" sx={{ mt: 2 }}>
                Registration Successful
            </Typography>
            <Typography>
                Thank you for your interest. We will contact you soon.
            </Typography>
        </Container>
    </>
    
  );
}

export default Success
