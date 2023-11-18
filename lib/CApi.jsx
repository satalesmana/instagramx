



import axios from "axios";

const CApi = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1',
    headers: {
        'api-key':'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
    },
});

export default CApi;