import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(300),
        height: theme.spacing(16),
      },
    },
  }));
const Login = () => {
    const classes = useStyles();
    return (
<div className={classes.root}>
      <Paper elevation={3}>
          <div>
      <TextField id="standard-basic" label="Email" />
      </div>
      <div>
      <TextField id="standard-basic" label="Password" />
      </div>
      </Paper>
      <div>
      <Button variant="contained" color="primary">
  Login
</Button>
<Button variant="contained" color="primary">
  Sign Up
</Button>
      </div>
      
    </div>
    )
}

export default Login