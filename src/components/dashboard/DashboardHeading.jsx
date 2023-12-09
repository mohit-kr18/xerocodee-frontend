import classes from './DashboardHeading.module.css';
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DashboardHeading = () => {

    const [toggle, setToggle] = useState(false);

    const handletoggle = () =>{
        setToggle(!toggle);
    }

    const user = useSelector(state => state.auth.user)


    return (
        <div className={classes.dashboardHeading}>
            <div className={classes.dashboardHeading_wrapper}>
                <div className={classes.main_heading}>
                    <h1>Hi {user?.name} !</h1>
                    <div className={classes.welcome}>Welcome to Xerocodee Ecosystem 😎</div>
                </div>
                <div className={classes.toggle}>
                    <div className={classes.test_mode}>Test Mode</div>
                    {
                        toggle ? <BsToggle2On  color='#d7e8ff' className={classes.toggleIcon} onClick={handletoggle} />
                        :<BsToggle2Off color='#d7e8ff' className={classes.toggleIcon} onClick={handletoggle} />

                    }
                    
                    <div className={classes.production_mode}>Production Mode</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeading;