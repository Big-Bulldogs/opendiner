import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {updateData} from '../store/actions/fetchRestaurants'

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    minHeight: "100vh"
  },
  media: {
    height: 140,
  },
});

const RestaurantCard=(props)=>{
  const classes = useStyles();

  useEffect(() => props.onDataChange(), [])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
      restaurant: state.restaurant
  }
}

const mapDispatchToProps = dispatch => {
  return{
      onDataChange: () => dispatch(updateData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantCard)