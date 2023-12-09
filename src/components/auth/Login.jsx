import { TextInput, Button, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Login.module.css';
import signup_logo from '../../assets/signup_logo.svg';
import signup_polygon from '../../assets/polygon.png';
import xerocodee from '../../assets/xerocodee.png';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import { resetError,loginUser } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useGoogleLogin from '../../hooks/useGoogleLogin';


const CLIENT_ID = '2da82eebc0268831e03d';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

  const { login } = useGoogleLogin();

	useAuth();
	const error = useSelector((state) => state.auth.error);

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	const handleSubmit = async (values) => {
		dispatch(loginUser(values));
	};

	const handleSignin = () => {
		navigate('/signup');
	};

	const loginWithGithub = () => {
		window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
	};

	return (
		<div className={classes.signup}>
			<div className={classes.signup_wrapper}>
				<div className={classes.singup_main}>
					<div className={classes.left_section}>
						<div className={classes.xerocodee_logo}>
							<img src={xerocodee} alt="xerocodee-logo" />
						</div>
						<div className={classes.second_blank}>
							<div className={classes.hello}>Welcome</div>
							<div className={classes.singup_subTitle}>
								<p className={classes.blank}></p>
								<p className={classes.account}>Login To Your Account</p>
								<p className={classes.blank}></p>
							</div>
							<div className={classes.form_section}>
								<form
									onSubmit={form.onSubmit((values) => handleSubmit(values))}
									className={classes.form}
								>
									{error && (
										<Alert
											onClose={() => dispatch(resetError())}
											withCloseButton
											color="red"
											className={classes.alert}
											title="Error Occured"
										>
											{error.message}
										</Alert>
									)}
									<TextInput
										mt="sm"
										placeholder="Email-Id"
										{...form.getInputProps('email')}
									/>

									<TextInput
										mt="sm"
										type="password"
										placeholder="Password"
                   
										{...form.getInputProps('password')}
									/>

									<Button mt="sm" type="submit" fullWidth color="#1f64ff">
										LOGIN
									</Button>
								</form>
								<div className={classes.or}>OR</div>
								<div className={classes.btn_section}>
									<button className={classes.btn} onClick={login}>
										<p className={classes.google}>Login With Google</p>
										<img src={google} alt="google" />
									</button>
									<button className={classes.btn} onClick={loginWithGithub}>
										<p className={classes.github}>Login With Github</p>
										<img src={github} alt="github" />
									</button>
								</div>
							</div>
						</div>
						<div className={classes.already_account}>
							Don't have an Account? <span onClick={handleSignin}>SIGN UP</span>
						</div>
					</div>
					<div className={classes.right_section}>
						<div className={classes.blank_signupLogo}>
							<div>
								<img src={signup_logo} alt="signup_logo" />
							</div>
						</div>
						<img src={signup_polygon} alt="singup-polygon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
