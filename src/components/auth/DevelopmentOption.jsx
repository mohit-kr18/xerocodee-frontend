import classes from './DevelopmentOption.module.css';
import xerocodee from "../../assets/xerocodee.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDevelopmentOption } from '../../redux/slices/preferencesSlice';
import { savePrefs } from '../../api/pref';


const DevelopmentOption = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const prefs = useSelector(state => state.preferences.prefs)
    const user = useSelector(state => state.auth.user)

    const handleOption = async (type) =>{
        dispatch(setDevelopmentOption(type))
        const prefdata = {
            ...prefs,
            userId: user.id,
            developmentOptions: type
        }
        await savePrefs(prefdata);

        navigate('/')
    }

    return (
        <div className={classes.preferences}>
            <div className={classes.preferences_container}>
                <div className={classes.preferences_main}>
                    <div className={classes.xerocodee_logo}>
                      <img src={xerocodee} alt="xerocodee-logo" />
                    </div>
                    <div className={classes.hello}>Welcome {user?.name}!</div>
                    <div className={classes.preferences_subTitle}>
                        <p className={classes.blank}></p>
                        <p className={classes.account}>Choose From The Following Development Options</p>
                        <p className={classes.blank}></p>
                    </div>
                    <div className={classes.developmentOption_types}>
                        <div className={classes.pref1} onClick={() => handleOption('self')}>Self Hosting</div>
                        <div className={classes.pref} onClick={() => handleOption('xerocodee')}>xerocodee Hosting</div>
                    </div>
                </div>
            </div>
        </div>
    )  
}


export default DevelopmentOption;