import search from '../../assets/search.svg';
import notifications from '../../assets/notifications.svg';
import profile from '../../assets/profile.svg';
import settings from '../../assets/Settings.svg';
import mail from '../../assets/mail.svg';
import expand_more from '../../assets/expand_more.svg';
import giftcard from '../../assets/giftcard.svg';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { ActionIcon, Tooltip } from '@mantine/core';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../redux/slices/authSlice';



const Topbar = () => {


    const dispatch = useDispatch();

    const handleLogout = () => {
		dispatch(logout());
	};

    const user = useSelector((state) => state.auth.user);
	return (
		<>
			<div className={classes.search_wrapper}>
				<input placeholder="Search" type="text" />
				<div className={classes.search}>
					<img src={search} alt="search" />
				</div>
			</div>
			<div className={classes.header_right_section}>
				<div className={classes.upgrade_plan_wrapper}>
					<div className={classes.giftcard}>
						<img src={giftcard} alt="giftcard" />
					</div>
					<div className={classes.upgrade_plan}>Upgrade Plan</div>
				</div>
				<div className={classes.notifications}>
					<img src={notifications} alt="notifications" />
				</div>
				<div className={classes.mail}>
					<img src={mail} alt="mail" />
				</div>
				<div className={classes.settings}>
					<img src={settings} alt="settings" />
				</div>
				<div className={classes.profile_expand}>
					<div className={classes.expand_more}>
						<div>XeroCodee</div>
						<img src={expand_more} alt="expand_more" />
					</div>
					<Tooltip label={'Logout'}>
						<ActionIcon variant="outline" color="red" onClick={handleLogout}>
							<FiLogOut />
						</ActionIcon>
					</Tooltip>
					{user?.picture || user?.avatar_url ? (
						<div className={classes.profile1}>
							<img src={user?.picture || user?.avatar_url} alt="profile" />
						</div>
					) : (
						<div className={classes.profile}>
							<img src={profile} alt="profile" />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Topbar;
