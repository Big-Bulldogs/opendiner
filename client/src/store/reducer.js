const initialState = {
    restaurants: [],
    currentLocation: [],
    selectedLocation: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE':
            return{
                ...state,
                restaurants: action.value
            }
        case 'GETLOC':
            return{
                ...state,
                currentLocation: action.value
            }
        case 'SETLOCATION':
            console.log('hit set location')
            return{
                ...state,
                selectedLocation: action.value
            }
    }
    return state
}

export default reducer

