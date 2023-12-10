import axiosInstance from 'axios';

const url =
	import.meta.env.VITE_ENV === 'dev'
		? 'http://localhost:5000'
		: 'https://xerocode-backend.vercel.app';
// console.log(import.meta.env);

export const axios = axiosInstance.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});

axios.interceptors.response.use(
    res => res,
    err => {
        const statusCode = err.response.status;
        if (statusCode === 401 || statusCode === 403) {
            localStorage.removeItem('token');
            window.location = '/login';
        }

        throw err;
    }
);