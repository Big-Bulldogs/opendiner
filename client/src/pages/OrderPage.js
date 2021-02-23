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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
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


const OrderForm = (props) => {
  const classes = useStyles();
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  
  console.log(props.selectedLocation);
  console.log(props.hasLoaded);

  function renderDropdown(props){
    return(
      <>
        {props.hasLoaded === true ? (
          props.selectedLocation.menu ? (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Select Item from Menu</DropdownToggle>
                <DropdownMenu>
                  {props.selectedLocation.menu.item.map((i) => (
                    <DropdownItem>
                      <Typography>`${i.name} ${i.price}`</Typography>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
            </ButtonDropdown>
             ): (
              <Typography> No menu items to display</Typography>
                )
             ): (
              <Typography>No menu items to display</Typography>
            )
        }
      </>
    );
  }
  
  function renderItemSelect(props) {
    return(
      <List>
        <>
          <ListItemLink>
            {renderDropdown()}
            <TextField
                    id="outlined-basic"
                    label="Quantity"
                    variant="outlined"
            />
          </ListItemLink>
        </>
      </List>
    )
  }
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography component="h1">
          Order from {props.selectedLocation.name}
        </Typography>
        <IconButton>
          <AddCircleIcon onClick={renderItemSelect} />
        </IconButton>
        {props.hasLoaded === true ? (
          props.selectedLocation.menu ? (
            <List>
              {props.selectedLocation.menu.item.map((i) => (
                <>
                  <ListItemLink key={i._id}>
                    <ListItemText primary={i.name} secondary={i.price} />
                    <TextField
                      id="outlined-basic"
                      label="Quantity"
                      variant="outlined"
                    />
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant,
    selectedLocation: state.selectedLocation,
    hasLoaded: state.hasLoaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDataChange: () => dispatch(updateData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
