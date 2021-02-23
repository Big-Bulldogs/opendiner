import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  IconButton,
  List,
  ListItemText,
  TextField,
  ListItem,
  Avatar,
} from "@material-ui/core";

import { connect } from "react-redux";
import { updateData } from "../store/actions/fetchRestaurants";
import {setItems} from "../store/actions/selectItems"
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
  },
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const OrderForm = (props) => {
  const classes = useStyles();
  
  console.log(props.selectedLocation);
  console.log(props.hasLoaded);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography component="h1">
          Order from {props.selectedLocation.name}
        </Typography>
        {props.hasLoaded === true ? (
          props.selectedLocation.menu ? (
            <List>
              {props.selectedLocation.menu.item.map((i) => (
                <>
                  <ListItemLink key={i._id} onClick={(item)=>props.setItems(i)}>
                    <ListItemText primary={i.name} secondary={i.price} />
                  </ListItemLink>
                </>
              ))}
            </List>
          ) : (
            <p>No items to display</p>
          )
        ) : (
          <p>no items to display</p>
        )}
      </Paper>
      <Paper>
        <Typography>Cart</Typography>
        {props.hasLoaded === true ? (
              props.selectedItems ? (
                <p>
                    <Typography>
                      <p>{props.selectedItems.name}</p>
                      <p>{props.selectedItems.price}</p>
                    </Typography>
                </p>
              ) : (
                <p> No menu items to display</p>
              )
            ) : (
              <p>No menu items to display</p>
            )}
      </Paper>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant,
    selectedLocation: state.selectedLocation,
    hasLoaded: state.hasLoaded,
    selectedItems: state.selectedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDataChange: () => dispatch(updateData()),
    setItems: (item)=>dispatch(setItems(item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
