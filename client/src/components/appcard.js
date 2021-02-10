import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';

const [image, setImage]= useState();
const [name, setFirstname] = useState();
const [phone, setPhone] = useState();
const [hours, setHours] = useState();
const [address, setAddress] = useState();
const [menu, setMenu]= useState();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function handleSubmit(e){
  e.preventDefault();
  console.log("image is" + image);
  console.log("name is " + name);
  console.log("phone is" + phone);
  console.log("hours are " + hours);
  console.log("address is" + address);
  console.log("menu is" + menu);
};

function restaurantSelect(){
  API.getRestaurants({
  image: this.state.image,
  name:this.state.name,
  phone: this.state.phone,
  hours: this.state.hours,
  address: this.state.address,
  menu: this.state.menu
  })
.then(res=>console.log(res.data))
.catch(res=>console.log(err))
}

export default function RestaurantCard() {
  const classes = useStyles();
  const{ image, name, phone, hours, address, menu}=this.state;

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