import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Button, List, ListItem } from "@material-ui/core";
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
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [user, setUser]=useState([]);

  function loadReservations() {
    API.getUserData()
      .then((res)=>(console.log(res)))
      .then((res) => setReservations(res.data.reservations))
      .then((res)=>setUser(res.data._id))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadReservations();
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Reservation submitted!")
    if (startDate.date && startTime.time) {
      API.postReservation({
        date: startDate.date,
        time: startTime.time,
        user: user._id,
        restaurant:props.selectedLocation._id
      })
        .then((res) => loadReservations())
        .catch((err) => console.log(err));
    }
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
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
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
                `${reservation.date} ${reservation.time} at ${reservation.restaurant.name}`
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
