const initialState = {
    restaurants: [],
<<<<<<< HEAD
    currentLocation: [],
=======
    currentLocation: [51.5,55],
>>>>>>> 7d90874779c274eadc2b00ff0095b15ae3d5f65a
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
<<<<<<< HEAD
            console.log('hit set location')
=======
            console.log('hit set')
>>>>>>> 7d90874779c274eadc2b00ff0095b15ae3d5f65a
            return{
                ...state,
                selectedLocation: action.value
            }
    }
    return state
}

export default reducer

