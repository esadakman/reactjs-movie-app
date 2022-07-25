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
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  // const [user, setUser] = useState(null);
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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <FormButton
              type="submit"
              className={classes.submit}
              style={{ width: "100%", borderRadius: "1px" }}
              // className={classes.submit}
            >
              Sign In
            </FormButton>
            <Flex style={{ marginBottom: "1rem" }}>
              <GoogleButton
                // label=""
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
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
