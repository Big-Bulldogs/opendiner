import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';;
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>{phone}</div>
            <div>{hours}</div>
            <div>{address}</div>
            <div>{menu}</div>
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