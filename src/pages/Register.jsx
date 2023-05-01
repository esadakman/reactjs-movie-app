import GoogleButton from "react-google-button";
import Flex, { FormButton } from "../components/globalStyles/Flex";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { GoogleRegister, register } from "../auth/firebase";
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
import { toastWarn } from "../helpers/ToastNotify";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
  // const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //

  // const { register } = UserAuth();
  const navigate = useNavigate();
  //
  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    if (email && password && firstName && lastName) {
      await register(email, password, displayName, navigate);
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
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            // my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSignUp}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // autoComplete="given-name"
                    name="firstName"
                    variant="outlined"
                    size="small"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    // autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <FormButton
                type="submit"
                style={{
                  width: "100%",
                  borderRadius: "1px",
                  margin: "1rem 0",
                }}
              >
                Sign Up
              </FormButton>
              <Flex style={{ marginBottom: "1rem" }}>
                <GoogleButton
                  label="Sign up with Google"
                  onClick={() => {
                    GoogleRegister(navigate);
                  }}
                />
              </Flex>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2" component={RouterLink}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
