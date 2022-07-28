import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${''}`,
    },
});

axiosInstance.interceptors.request.use(
    // Do something before request is sent
    config => {
        console.log(config);
        return config;
    },
    // Do something with request error
    error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response => {
        console.log(response);
        return {
            statusCode: response.status,
            ...response.data,
        };
    },
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    error => {
        console.log(error);
        return Promise.reject(error);
    },
);

export default axiosInstance;
