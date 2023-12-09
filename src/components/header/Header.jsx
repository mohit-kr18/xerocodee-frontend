import classes from './Header.module.css';
import xerocodee from '../../assets/xerocodee.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Topbar from './Topbar';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
		console.log(toggle);
	};

	return (
		<div className={classes.header}>
			<div className={classes.header_wrapper}>
				<div className={classes.burger_header_img}>
					{toggle ? (
						<ImCross size={20} onClick={handleToggle} />
					) : (
						<GiHamburgerMenu size={20} onClick={handleToggle} />
					)}
					<img src={xerocodee} alt="xerocodee img" className={classes.header_img} />
					{toggle ? (
						<>
							<Sidebar />
							{/* <Topbar /> */}
						</>
					) : null}
				</div>
				<Topbar />
			</div>
		</div>
	);
};

export default Header;
