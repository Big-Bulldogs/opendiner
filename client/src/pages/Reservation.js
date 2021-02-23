import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Button, List, ListItem, TextField } from "@material-ui/core";
import DatePicker from "react-datepicker";
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
      width: 250,
    },
    header: {
      marginRight: "20px",
    },
  }));

  // const currentTimeDate = Date.now();
  const classes = useStyles();

  const [reservations, setReservations] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [user, setUser]=useState("");

  useEffect(() => {
    API.getUserData()
      .then(res => {
      console.log(res.data)
       setReservations(res.data.reservations)
       setUser(res.data._id)
       
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user, reservations)
  function handleFormSubmit(event) {
    event.preventDefault();
      API.postReservation({
        date: startDate,
        time: startTime,
        user: user,
        restaurant:props.selectedLocation._id
      })
        .then(res => {
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    
  }
  function handleInputChange(event) {
    const {value } = event.target;
    setStartTime(value);
  }

  return (
    <>
      <Paper elevation={3}>
        <Typography component="h1" className={classes.header}>
          Reservation for {props.selectedLocation.name}
        </Typography>
        <form className={classes.container} noValidate>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <TextField id="outlined-basic" label="Time" onChange={handleInputChange}></TextField>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="small"
            onClick={handleFormSubmit}
          >
            Schedule{" "}
          </Button>
        </form>
      </Paper>
      <Typography component="h1">Reservation History</Typography>
      {reservations ? (
        <List>
          {reservations.map((reservation) => (
            <ListItem key={reservation._id}>
                <h3>{reservation.date}</h3><p>@</p><h3>{reservation.time}</h3>

            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
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
