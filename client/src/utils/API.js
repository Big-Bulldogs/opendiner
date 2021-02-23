import axios from 'axios'

export default {
    getRestaurants: function(){
        return axios.get('http://localhost:3005/restaurant')
    },
    postUser: function(userData){
        return axios.post('http://localhost:3005/newuser', userData)
    },
    getUser: function(){
        return axios.get('http://localhost:3005/user')
    },
    login: function(login){
        return axios.post('http://localhost:3005/login',login)
    },
    postReservation: function (reservation){
        return axios.post('http://localhost:3005/newreservation',reservation)
    },
    getUserData: function(){
        return axios.get('http://localhost:3005/user_data')
    }
}