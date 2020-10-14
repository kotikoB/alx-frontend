import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:6000/api'
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
