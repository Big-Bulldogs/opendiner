import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { updateData } from "../store/actions/fetchRestaurants";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
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
}));

const RestaurantCard=(props)=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const website= `https://${props.selectedLocation.webpage}`;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <RestaurantIcon aria-label="restaurant" className={classes.avatar}></RestaurantIcon>
        }
        action={
          <IconButton aria-label="settings" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.selectedLocation.name}
        subheader={props.selectedLocation.address}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Make a reservation</MenuItem>
        <Link to="/order">
        <MenuItem onClick={handleClose}>Place an online order</MenuItem>
        </Link>
      </Menu>
      <CardMedia className={classes.media} image="" title="" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.selectedLocation.phone_number}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={website}>{props.selectedLocation.webpage}</a>
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
        <div className="menu">
          <CardContent>
            {props.hasLoaded === true ? (
              props.selectedLocation.menu ? (
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
                <p> No menu items to display</p>
              )
            ) : (
              <p>No menu items to display</p>
            )}
          </CardContent>
        </div>
      </Collapse>
    </Card>
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

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantCard);