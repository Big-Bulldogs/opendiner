const initialState = {
    restaurants: [],
    currentLocation: [51.5,55],
    selectedLocation: {},
    hasLoaded: false,
    selectedItems: {}
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
            console.log('hit set')
            return{
                ...state,
                selectedLocation: action.value
            }
        case 'HASLOADED':
            return{
                ...state,
                hasLoaded: action.value
            }
        case 'SELECTEDITEMS':
            return{
                ...state,
                selectedItems: action.value
            }
    }
    return state
}

export default reducer

