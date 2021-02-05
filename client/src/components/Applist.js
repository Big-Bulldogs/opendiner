import {React, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import API from '../utils/API'
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

export default function SimpleList() {
    const classes = useStyles();
    useEffect(() => {
        API.getRestaurants()
        .then(res => {
            console.log(res.data)
        })
    })
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                </ListItem>
                <h1>Hello</h1> 
            </List>
        </div>
    );
}
