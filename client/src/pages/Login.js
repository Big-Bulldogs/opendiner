import { useHistory, Link } from 'react-router-dom';
import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../utils/API';
const Login = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(300),
        height: theme.spacing(16)
      }
    }
  }));
  const classes = useStyles();
  const [formObject, setFormObject] = useState({});
  const history = useHistory();
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    API.login({
      email: formObject.email,
      password: formObject.password
    })
      .then(res => {
        console.log(res.data);
        history.push('/home');
      })
      .catch(err => console.log(err));
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div>
          <TextField id="standard-basic" onChange={handleInputChange} name="email" label="Email" />
        </div>
        <div>
          <TextField id="standard-basic" onChange={handleInputChange} name="password" type="password" label="Password" />
        </div>
      </Paper>
      <div>
        <Button variant="contained" onClick={handleFormSubmit} color="primary">
          Login
        </Button>
        <Link to="/signup">
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Login;