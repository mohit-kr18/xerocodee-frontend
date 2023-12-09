import classes from './ServiceProgress.module.css';
import graycolor from '../../assets/graycolor.svg';
import { useRef } from 'react';
import useScrollToFocus from '../../hooks/useScrollToFocus';

const ServiceProgress = ({step,Service}) =>{
    const ref = useRef(null);

    useScrollToFocus(ref);

    return (
                <div className={classes.service_progress} ref={ref}>
                   <div className={classes.step}>{step}</div>   
                    <div className={classes.Service_item_wrapper} style={{backgroundColor:`${Service?.backgroundColor}`}}>
                        <div className={classes.name_icon}>
                            <div className={classes.name_status}>
                                <div className={classes.name}>
                                    <p>{Service?.name}</p>
                                </div>
                                <div className={classes.status}>
                                    <p>Status:Complete</p>
                                </div>
                            </div>
                            <div className={classes.icon_graycolor}>
                                <div className={classes.icon} >
                                    <img src={Service?.icon} alt="cloudservice" />
                                </div>
                                <div className={classes.graycolor}>
                                    <img src={graycolor} alt="graycolor" />
                                    <img src={graycolor} alt="graycolor" />
                                    <img src={graycolor} alt="graycolor" />
                                </div>
                            </div>   
                        </div>
                    </div>
        </div>
        
    )
}

export default ServiceProgress;