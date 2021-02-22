import React from, { useState, useEffect } "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import API from "../utils/API";
import { connect } from "react-redux";
import { updateData } from "../store/actions/fetchRestaurants";


const Reservation = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    header: {
      marginRight: "20px",
    },
  }));
  const currentTimeDate = Date.now();

  // Setting our component's initial state
  const [reservations, setReservations] = useState([])
  const [formObject, setFormObject] = useState({})
  // Load all books and store them with setBooks
  useEffect(() => {
    loadReservations()
  }, [])

  function loadReservations() {
    API.getReservations()
      .then(res => 
        setReservations(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { dateTime, value } = event.target;
    setFormObject({...formObject, [dateTime]: value})
  };




  return (
    <>
      <Paper elevation={3}>
        <Typography component="h3" variant="p" className={classes.header}>
          Reservation for {props.selectedLocation.name}
        </Typography>
        <form className={classes.container} noValidate>
          <p>
            <TextField
              id="datetime-local"
              label="Next reservation"
              type="datetime-local"
              defaultValue={currentTimeDate}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </p>
          <Button type="submit" color="primary" variant="contained" size="small" onClick={makeReservation}>Schedule </Button>
        </form>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant,
    selectedLocation: state.selectedLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDataChange: () => dispatch(updateData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);


///have Sam check API call and whether I need a handleSubmit
//do we want a reservation history to display below on another card? 