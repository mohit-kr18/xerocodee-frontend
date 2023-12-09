import { useGoogleLogin } from '@react-oauth/google';
import { login as login_ } from '../redux/slices/authSlice';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useGoogleAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

	const responseMessage = async (response) => {
		dispatch(
			login_({
				accessToken: response.access_token,
				provider: 'google',
			})
		);
        navigate('/');
	};

	const errorMessage = (error) => {
		console.log(error);
	};

	const login = useGoogleLogin({
		onSuccess: responseMessage,
		onError: errorMessage,
	});

	return {
        login
    };
};

export default useGoogleAuth;
