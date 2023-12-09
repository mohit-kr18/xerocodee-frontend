import { useEffect } from 'react';
import classes from './Dashboard.module.css';
import DashboardHeading from './DashboardHeading';
import Progress from '../progressCard/Progress';
import Stepper from './Stepper';
import {
	getGithubUser,
	getGoogleUser,
	getMe,
	saveGithubUser,
	saveGoogleUser,
} from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { axios } from '../../api';
import { setUser } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { getPrefs } from '../../api/pref';
import { setPreferences } from '../../redux/slices/preferencesSlice';

const Dashboard = () => {
	const token = useSelector((state) => state.auth.token);
	const provider = useSelector((state) => state.auth.provider);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchMe = async () => {
			try {
				// To check if authentication is working
				let id;
				if (provider === 'authService') {
					const res = await getMe();
					const userdata = { ...res, name: res.firstName + ' ' + res.lastName };
					dispatch(setUser(userdata));
					id = res.id;
				} else if (provider === 'github') {
					const res = await getGithubUser(token);
					const response = await res.json();
					const { userId } = await saveGithubUser(token);
					const userdata = { ...response, id: userId };
					dispatch(setUser(userdata));
					id = userId;
				} else {
					const res = await getGoogleUser(token);
					const { userId } = await saveGoogleUser(token);
					const userdata = { ...res, id: userId };
					dispatch(setUser(userdata));
					id = userId;
				}

				const prefs = await getPrefs(id);
				dispatch(setPreferences(prefs.data));

				// console.log(res);
			} catch (error) {
				console.log(error);
			}
		};
		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			fetchMe();
		}
	}, [token]);
	const navigate = useNavigate();

	const user = useSelector((state) => state.auth.user);
	useEffect(() => {
		const fetchPrefs = async () => {
			const res = await getPrefs(user.id);
			if (!res.data) {
				navigate('/preferences');
			}
		};
		if (user) {
			fetchPrefs();
		}
	}, [user]);

	return (
		<div className={classes.dashboard}>
			<div className={classes.dashboard_wrapper}>
				<DashboardHeading />
			</div>
			<div className={classes.dashboard_main}>
				<div className={classes.stepper}>
					<Stepper />
				</div>
				<div className={classes.progress}>
					<Progress />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
