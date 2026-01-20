import { Container, Grid, Typography } from '@mui/material';

export default function CampaignInfo() {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Enjoy a discount</Typography>
          <Typography>
            Some models enjoy extra discounts.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Free Test Drive</Typography>
          <Typography>
            You can test drive first, and then you decide to place an order when you are satisfied.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Limited Time</Typography>
          <Typography>
            This activity disappeared after a month, don’t miss out on this limited-time campaign.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
