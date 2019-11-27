import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
// import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import fireAuth from "../../FireBase";
// import IconButton from "@material-ui/core/IconButton";
// import DoneIcon from "@material-ui/icons/Done";

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      open: false
    };
  }

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  onLogin = e => {
    e.preventDefault();
    fireAuth
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log('res', res)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FingerprintIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            {/* <label style={{ color: "green" }}>
              {this.state.error ? "Login Failed !!!" : "Login Sucess !!!"}
            </label> */}
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.onChangeValue}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.onChangeValue}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <label style={{ color: "red", fontStyle: "italic" }}>
              {this.state.error}
            </label>
            <FormControlLabel
              style={{ float: "left", marginTop: 20 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">{"Login Sucess !!!"}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <DoneIcon />
            </IconButton>
          ]}
        /> */}
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignIn);
