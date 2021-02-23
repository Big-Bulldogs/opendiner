import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import API from '../utils/API'
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(300),
        height: theme.spacing(50),
      },
    },
  }));
const SignUp = () => {
    const classes = useStyles();
const [formObject, setFormObject] = useState({})
function handleInputChange(event){
    const {name,value} = event.target;
    setFormObject({...formObject, [name]:value})
    
}
let history = useHistory();
function handleFormSubmit(event){
    event.preventDefault()
    API.postUser({
        firstname: formObject.firstname,
        lastname: formObject.lastname,
        email: formObject.email,
        password: formObject.password
    })
    .then(res => {
        console.log(res.data)
        history.push('/login')
    })
    .catch(err => console.log(err))
}

console.log(formObject)


    return (
<div className={classes.root}>
      <Paper elevation={3}>
      <div>
      <TextField id="standard-basic" onChange={handleInputChange} name="firstname" label="First Name" />
      </div>
      <div>
      <TextField id="standard-basic" onChange={handleInputChange} name="lastname" label="Last Name" />
      </div>
      
          <div>
      <TextField id="standard-basic" onChange={handleInputChange} name="email"  label="Email" />
      </div>
      <div>
      <TextField id="standard-basic" onChange={handleInputChange} name="password" type="password" label="Password" />
      </div>
      </Paper>
      <div>
     
<Button variant="contained" onClick={handleFormSubmit} color="primary">
  Sign Up
</Button>

      </div>
      
    </div>
    )
}

export default SignUp