const initialState = {
    restaurants: [],
    currentLocation: []
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
    }
    return state
}

export default reducer

