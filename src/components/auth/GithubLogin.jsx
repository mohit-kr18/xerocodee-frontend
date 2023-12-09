import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './GithubLogin.module.css';
import { useEffect, useState } from 'react';
import { githubLogin } from '../../api/auth';
import { login } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const GithubLogin = () => {
	const [searchParams] = useSearchParams();
	const code = searchParams.get('code');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchToken = async () => {
            setLoading(true);
			const res = await githubLogin(code);
            setLoading(false);
			const accessToken = res.accessToken;
			dispatch(login({ accessToken, provider: "github" }));
			navigate('/');
		};
		if (code) {
			fetchToken();
		}
	}, [code]);

	return (
        <div className={classes.githubLogin}>
            {loading ? <h1>Login through github ....</h1>: <h1>Redirecting ...</h1>}
        </div>
    );
};

export default GithubLogin;
