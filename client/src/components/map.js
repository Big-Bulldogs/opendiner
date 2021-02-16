import {React,useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {connect} from 'react-redux'
import {getLocation} from '../store/actions/getLocation'

const Map = (props) => {
  return (
    <MapContainer center={props.currentLocation} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
)
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onGetLocation: () => dispatch(getLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)