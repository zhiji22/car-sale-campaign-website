import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    const {name, phone, email} = formData;
    if(!name || !phone || !email) {
      alert('Please fill in all fields');
      return;
    }


    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      router.push('/success');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };
  return (
    <Box id="register" sx={{ backgroundColor: '#fafafa', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Phone"
                {...register('phone', { required: 'Phone number is required', pattern: {
                    value: /^[4-9]\d{7}$/,
                    message: 'Invalid phone number, please use HK number',
                  }, })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Grid>
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              loading={isSubmitting}
              sx={{ mt: 3 }}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
