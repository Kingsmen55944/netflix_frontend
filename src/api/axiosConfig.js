import axios from 'axios';

export default axios.create({
    baseURL:'http://3.101.63.23:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
