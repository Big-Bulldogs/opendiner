
import {React, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import {connect} from 'react-redux'
import {updateData} from '../store/actions/fetchRestaurants'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const SimpleList = (props) => {
    const classes = useStyles();

    useEffect(() => props.onDataChange(), [])
    
    return (
        <div className={classes.root}>
            <List>
                {props.restaurants.map(r => (
            <>
          
            <ListItemLink key={r._id}>
            <ListItemAvatar>
            <Avatar>
              <RestaurantIcon />
            </Avatar>
          </ListItemAvatar>
            <ListItemText primary={r.name} secondary={r.address} />

            </ListItemLink>
            </>
                ))}
            
                
            </List>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onDataChange: () => dispatch(updateData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SimpleList)