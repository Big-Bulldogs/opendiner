const initialState = {
    restaurants: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE':
            return{
                ...state,
                restaurants: action.value
            }
    }
    return state
}

export default reducer