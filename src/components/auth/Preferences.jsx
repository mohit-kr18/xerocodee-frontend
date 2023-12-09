import { Button, TextInput } from '@mantine/core';
import classes from './Preferences.module.css';
import xerocodee from "../../assets/xerocodee.png";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAccountTypeName } from '../../redux/slices/preferencesSlice';
import { useMediaQuery } from '@mantine/hooks';
import { Input } from '@mui/material';

const Preferences = () => {

    const [preference,setPreference] = useState("")
    const [name,setName] = useState("")

    const navigate = useNavigate();

    const handlePreference = (e) => {
        setPreference(e.target.textContent)
    }

    const getClass = (type) => {
        return preference === type ? `${classes.pref_active}` : `${classes.pref}`
    }
    
    
    const handleVisibility = preference !=="" ? classes.selected_preference : classes.selected_preference_hidden
    
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleSubmit = () =>{
        let accountName = name
        if (accountName === "") {
            accountName = "Developer"
        }
        dispatch(setAccountTypeName({
            accountType: preference,
            accountName: name
        }))
        navigate('/option')
    }
    

    return (
		<div className={classes.preferences}>
			<div className={classes.preferences_container}>
				<div className={classes.preferences_main}>
					<div className={classes.xerocodee_logo}>
						<img src={xerocodee} alt="xerocodee-logo" />
					</div>
					<div className={classes.hello}>Welcome {user?.name} !</div>
					<div className={classes.preferences_subTitle}>
						<p className={classes.blank}></p>
						<p className={classes.account}>Choose From The Following</p>
						<p className={classes.blank}></p>
					</div>
					<div className={classes.preferences_types}>
						<div className={classes.pref} onClick={handleSubmit}>
							Developer
						</div>
						<div className={getClass('Organization')} onClick={handlePreference}>
							Organization
						</div>
						<div className={getClass('Company')} onClick={handlePreference}>
							Company
						</div>
						{/* <PreferenceButton type={'Developer'} activePref={preference} handlePreference={handlePreference}/>
                        <PreferenceButton type={'Organization'} activePref={preference} handlePreference={handlePreference}/>
                        <PreferenceButton type={'Company'} activePref={preference} handlePreference={handlePreference}/> */}
					</div>
                    <div className={handleVisibility}>
                        <input
                            type="text"
                            placeholder={`${preference} Name`}
                            value={name}
                            className={classes.input}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button  maw={'150px'} type="submit" color="#1f64ff" onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </div>
				</div>
			</div>
		</div>
	);  
}

// const PreferenceButton = ({type, activePref, handlePreference}) => {
//     const prefclasses = activePref === type ? `${classes.pref_active}` : `${classes.pref}`
//     return (
//         <div className={prefclasses} onClick={handlePreference}>{type}</div>
//     )
// }

export default Preferences;