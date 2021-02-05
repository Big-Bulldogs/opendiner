import axios from 'axios'

export default {
    getRestaurants: function(){
        return axios.get('http://localhost:3005/restaurant')
    }
}