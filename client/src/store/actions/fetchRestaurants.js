import API from '../../utils/API'
export const UPDATE = 'UPDATE'
export const SETLOCATION = "SETLOCATION"
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

<<<<<<< HEAD
export const SETLOCATION = "SETLOCATION"

export const setLocation = (res) => {
    console.log('hit in action ', res)
=======
export const setLocation = (res) => {
    console.log("restaurant", res)
>>>>>>> 7d90874779c274eadc2b00ff0095b15ae3d5f65a
    return{
        type: SETLOCATION,
        value: res
    }
}