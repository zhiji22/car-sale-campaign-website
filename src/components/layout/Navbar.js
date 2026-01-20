// components/layout/Navbar.tsx
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
