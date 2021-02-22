import axios from 'axios'

export default {
    getRestaurants: function(){
        return axios.get('http://localhost:3005/restaurant')
    },
    postUser: function(userData){
        return axios.post('http://localhost:3005/newuser', userData)
    },
    getUser: function(userData){
        return axios.get('http://localhost:3005/user')
    },
    login: function(login){
        return axios.post('http://localhost:3005/login',login)
    }
}