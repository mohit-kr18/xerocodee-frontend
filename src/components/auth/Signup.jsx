import { TextInput, Button, Alert} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Signup.module.css";
import signup_logo from "../../assets/signup_logo.svg";
import signup_polygon from "../../assets/polygon.png";
import xerocodee from "../../assets/xerocodee.png";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import { registerUser, resetError } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useGoogleAuth from "../../hooks/useGoogleLogin";

const CLIENT_ID = '2da82eebc0268831e03d';

const SignUp = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  useAuth();

  const {login } = useGoogleAuth();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = async (values) => {
    dispatch(registerUser(values));
  };


  const handleLogin = () => {
    navigate("/login");
  };

  const SigninWithGithub = () => {
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
							<div className={classes.hello}>Hello!</div>
							<div className={classes.singup_subTitle}>
								<p className={classes.blank}></p>
								<p className={classes.account}>Create Your Account</p>
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
										placeholder="First Name"
										{...form.getInputProps('firstName')}
									/>

									<TextInput
										mt="sm"
										placeholder="Last Name"
										{...form.getInputProps('lastName')}
									/>

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

									<TextInput
										mt="sm"
										type="password"
										placeholder="Confirm password"
										{...form.getInputProps('confirmPassword')}
									/>
									<Button mt="sm" type="submit" fullWidth color="#1f64ff">
										SIGN UP
									</Button>
								</form>
								<div className={classes.or}>OR</div>
								<div className={classes.btn_section}>
									<button className={classes.btn} onClick={login}>
										<p className={classes.google}>Sign Up With Google</p>
										<img src={google} alt="google" />
									</button>
									<button className={classes.btn} onClick={SigninWithGithub}>
										<p className={classes.github}>Sign Up With Github</p>
										<img src={github} alt="github" />
									</button>
								</div>
							</div>
						</div>
						<div className={classes.already_account}>
							Already have an account? <span onClick={handleLogin}>LOGIN</span>
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

export default SignUp;
