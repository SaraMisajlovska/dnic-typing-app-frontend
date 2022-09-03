import axios from "axios";

const instance = axios.create({
    baseURL: 'https://typing-app-bck-191517.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;