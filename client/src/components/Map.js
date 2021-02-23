import {React,useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {connect} from 'react-redux'
import {getLocation} from '../store/actions/getLocation'
import Geocode from "react-geocode";
const Map = (props) => {
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  Geocode.setApiKey("AIzaSyAxA1ecp0z2T9OVhmLP0e6GQZl24k3YLcc");
  Geocode.fromAddress(props.selectedLocation.address).then(
    (res) => {
      const { lat, lng } = res.results[0].geometry.location;
      console.log(lat, lng);
      setLat(lat)
      setLng(lng)
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <MapContainer center={[39.0997265,-94.5785667]} zoom={4} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lng]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
)
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    selectedLocation: state.selectedLocation
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onGetLocation: () => dispatch(getLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)