import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { connect } from "react-redux";
import { updateData } from "../store/actions/fetchRestaurants";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RestaurantCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="restaurant" className={classes.avatar}></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.selectedLocation.name}
        subheader={props.selectedLocation.address}
      />
      <CardMedia className={classes.media} image="" title="" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.selectedLocation.phone_number}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.selectedLocation.webpage}
        </Typography>
        <Typography>
          {props.hasLoaded === true ? (
            <p>
              {props.selectedLocation.hours.map((h) => (
                <Typography component="p">{h}</Typography>
              ))}
            </p>
          ) : (
            <p>No hours to display</p>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show menu"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {(props.hasLoaded === true) ? (
            <p>
              {props.selectedLocation.menu.item.map((i) => (
                <Typography>
                  <p>{i.name}</p>
                  <p>{i.description}</p>
                  <p>{i.price}</p>
                  </Typography>
              ))}
            </p>
          ) : (
            <p>No menu items to display</p>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedLocation: state.selectedLocation,
    restaurant: state.restaurant,
    hasLoaded: state.hasLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDataChange: () => dispatch(updateData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCard);

// {props.selectedLocation.restaurant.hours.map(h=><Typography component="p">h</Typography>)}
