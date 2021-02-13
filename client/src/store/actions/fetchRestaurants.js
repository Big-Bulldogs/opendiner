import API from '../../utils/API'
export const UPDATE = 'UPDATE'

export const update = (res) => {
    return{
        type: UPDATE,
        value: res
    }
}

export const updateData = () => {
    return dispatch => {
        API.getRestaurants()
        .then(res => {
            console.log(res.data)
            dispatch(update(res.data))
        })

    }
}

export const SETLOCATION = "SETLOCATION"

export const setLocation = (res) => {
    console.log('hit in action ', res)
    return{
        type: SETLOCATION,
        value: res
    }
}