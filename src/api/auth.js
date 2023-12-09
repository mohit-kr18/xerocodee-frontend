import {axios} from '.'


export const login = async (email, password) => {
    const { data } = await axios.post('/api/auth/login', { email, password });
    return data;
}

export const register = async (firstName, lastName, email, password) => {
    const { data } = await axios.post('/api/auth/register', { firstName, lastName, email, password });
    return data;
}

export const githubLogin = async (code) => {
    const { data } = await axios.post('/api/auth/github-login', { code });
    return data;
}

export const getMe = async () => {
    const { data } = await axios.get('/');
    return data;
}


export const getGithubUser = async (token) => {
    const data = await fetch('https://api.github.com/user', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
    return data;
}



export const getGoogleUser = async (token) => {
    const res = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
		},
	});
    return res.data;
}


export const saveGithubUser = async (token) => {
    const res = await axios.post('/api/auth/save-github-user', { accessToken: token });
    return res.data;
}

export const saveGoogleUser = async (token) => {
    const res = await axios.post('/api/auth/save-google-user', { accessToken: token });
    return res.data;
}

const authService = {
    login,
    register,
    getMe
}

export default authService;