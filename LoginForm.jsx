import { TextField, Button, Box, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="contained">Submit</Button>
    </Box>
  );
}

export default LoginForm;