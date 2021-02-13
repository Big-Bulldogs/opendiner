export const GETLOC = "GETLOC"

export const location = (res) => {
    return{
        type: GETLOC,
        value: res
    }
}

export const getLocation = () => {
    return dispatch => {
        navigator.geolocation.getCurrentPosition(show)
        function show(position){
            
            dispatch(location(position.coords.latitude,position.coords.longitude))
        }
        
        
    }
}

