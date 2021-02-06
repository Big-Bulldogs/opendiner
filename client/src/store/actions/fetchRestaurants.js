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
        API.getRestaurants
        .then(res => {
            dispatch(update(res.data))
        })

    }
}