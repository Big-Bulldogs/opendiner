import axios from 'axios'

export default {
    getRestaurants: function(){
        return axios.get('/restaurant')
    },
    postUser: function(userData){
        return axios.post('/newuser', userData)
    },
    getUser: function(){
        return axios.get('/user')
    },
    login: function(login){
        return axios.post('/login',login)
    },
    postReservation: function (reservation){
        return axios.post('/newreservation',reservation)
    },
    getUserData: function(){
        return axios.get('/user_data')
    }
}