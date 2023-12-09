
import classes from './Progress.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ServiceProgress from './ServiceProgress';
import ProgressChart from './ProgressChart';
import { useEffect } from 'react';
import { setProgressAmount } from '../../redux/slices/progressAmountSlice';

const Progress = () =>{

    const cloudServices = useSelector(state => state.cloudService.data);
    const databaseServices = useSelector(state => state.databaseService.data);
    const sourceCodeServices = useSelector(state => state.sourceCodeService.data);
    const progressAmount = useSelector(state => state.progressAmount.quantity);

    const dispatch = useDispatch();

    const calculateProgress = () => {
        let progress = 0;
        if (cloudServices) {
            progress += 40;
        }
        if (databaseServices) {
            progress += 20;
        }
        if (sourceCodeServices) {
            progress += 40;
        }
        dispatch(setProgressAmount(progress));
    }

    useEffect(() => {
        calculateProgress();
    }, [cloudServices, databaseServices, sourceCodeServices])


    return (
        <div className={classes.progress}>
            <div className={classes.progress_wrapper}>
                <div className={classes.progress_heading}>
                    <h2 className={classes.progress}>Your Progress</h2>
                    <p className={classes.xerocodee}>toward Xerocodee</p>
                </div>
                <div className={classes.progress_chart}>
                    <ProgressChart/>
                    <div className={classes.progress_amount}>{progressAmount}%</div>
                </div>
                <button className={classes.view_details}>View Details</button>
                <div className={classes.cloud}>
                {cloudServices && <ServiceProgress step={'Step 1'} Service={cloudServices}/>}
                </div>
                <div className={classes.database}>
                {sourceCodeServices && <ServiceProgress step={'Step 2'} Service={sourceCodeServices}/>}
                </div>
                <div className={classes.source_code}>
                {databaseServices && <ServiceProgress step={'Step 3'} Service={databaseServices}/>}
                </div>
            </div>
        </div>
    )
}

export default Progress;