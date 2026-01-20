import { Container, Typography, Box, CircularProgress } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography gutterBottom>
          Tower B, Unit 1602-03, 83 King Lam St, Lai Chi Kok
        </Typography>

        <Box sx={{ mt: 4 }}>

          {loading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <iframe
            src="https://www.google.com/maps?q=Tower%20B%2C%20Unit%201602-03%2C%2083%20King%20Lam%20St%2C%20Lai%20Chi%20Kok&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            loading="lazy"
            // referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoading(false)}
          />
        </Box>
      </Container>
    </>
  );
}
