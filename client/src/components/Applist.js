
import {React, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
            <ListItemLink key={r._id}href="#simple-list">
            <ListItemText primary={r.name} />

            </ListItemLink>
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