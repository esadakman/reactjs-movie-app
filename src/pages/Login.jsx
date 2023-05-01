import GoogleButton from "react-google-button";
import Flex, { FormButton } from "../components/globalStyles/Flex";
import { forgotPassword, GoogleRegister, login } from "../auth/firebase";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { toastWarn } from "../helpers/ToastNotify";
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const user = await login(email, password, navigate);
    if (email && password) {
      await login(email, password, navigate);
    } else {
      toastWarn("Please fill out all fields.");
    }
  };
  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: "91vh", sm: "90vh" } }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/user/erondu/1600x900)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // size="small"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // size="small"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton
              type="submit"
              style={{
                width: "100%",
                borderRadius: "1px",
                margin: ".8rem 0 ",
              }}
            >
              Sign In
            </FormButton>
            <Flex style={{ marginBottom: "1rem" }}>
              <GoogleButton
                onClick={() => {
                  GoogleRegister(navigate);
                }}
              />
            </Flex>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => forgotPassword(email)}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2" component={RouterLink}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
