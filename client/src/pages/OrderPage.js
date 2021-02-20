import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,IconButton,List,ListItemText,ListItemAvatar, ListItem, Avatar} from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from "react-redux";
import { updateData } from "../store/actions/fetchRestaurants";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
  },
}));
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
const OrderForm=(props)=>{
  const classes = useStyles();
  console.log(props.selectedLocation)
  console.log(props.hasLoaded)
  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <Typography component="h1">Order from {props.selectedLocation.name}</Typography>
            <IconButton><AddCircleIcon onClick=''/></IconButton>
                {props.hasLoaded===true ?(
                    props.selectedLocation.menu ? (
                        <List>
                            {props.selectedLocation.menu.item.map((i)=>(
  <>
  <ListItemLink key={i._id}>
  <ListItemAvatar>
  <Avatar>
    <RestaurantIcon />
  </Avatar>
</ListItemAvatar>
  <ListItemText primary={i.name} secondary={i.address} />
  </ListItemLink>
  </>
                            ))}
                            </List>
                    ):(
                        <p>No items to display</p>
                    )
                ):(
                    <p>no items to display</p>
                )}
        </Paper>
    </div>
  );
}
const mapStateToProps = state => {
    return {
        restaurant: state.restaurant,
        selectedLocation: state.selectedLocation,
        hasLoaded: state.hasLoaded
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
        onDataChange: () => dispatch(updateData())
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(OrderForm);