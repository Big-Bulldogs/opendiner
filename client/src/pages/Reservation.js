import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
  const currentTimeDate = Date.now();
  const classes = useStyles();

  const [reservations, setReservations] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadReservations();
  }, []);

  function loadReservations() {
    API.getUser()
      .then(
        (res) => console.log(res.data) //setReservations
      )
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { dateTime, value } = event.target;
    setFormObject({ ...formObject, [dateTime]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.dateTime) {
      API.postReservation({
        dateandtime: formObject.dateTime.toISOString(),
      })
        .then((res) => loadReservations())
        .catch((err) => console.log(err));
    }
  }

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
              onChange={handleInputChange}
            />
          </p>
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
      {reservations.length ? (
        <List>
          {reservations.map((reservation) => (
            <ListItem key={reservation._id}>
              <Link to={"/reservations/" + reservation._id}>
                <strong>
                  {reservation.dateandtime} at
                </strong>
              </Link>
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
