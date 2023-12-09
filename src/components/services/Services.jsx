import classes from './Services.module.css';
import greencolor from '../../assets/greencolor.svg';
import redcolor from '../../assets/redcolor.svg';
import Sync from '../../assets/Sync.svg';
import { useDispatch } from 'react-redux';
import { setCloudServiceData } from '../../redux/slices/cloudServiceSlice';
import { setSourceCodeServiceData } from '../../redux/slices/souceCodeServiceSlice';
import { setDatabaseServiceData } from '../../redux/slices/databaseServiceSlice';

const Services = ({ step, typeofService, services }) => {
	return (
		<div className={classes.Service}>
			<div className={classes.step1}>{step}</div>
			<p className={classes.connect_service}>Connect to {typeofService}</p>
			<div className={classes.Service_wrapper}>
				{services.map((service, index) => {
					return <Service key={index} service={service} typeofService={typeofService} />;
				})}
			</div>
		</div>
	);
};

const Service = ({ service, typeofService }) => {
	const dispatch = useDispatch();

	const handleService = () => {
		if (typeofService === 'Cloud') {
			dispatch(setCloudServiceData(service));
		}
		if (typeofService === 'Source Code') {
			dispatch(setSourceCodeServiceData(service));
		}
		if (typeofService === 'DataSource') {
			dispatch(setDatabaseServiceData(service));
		}
	};

	return (
		<div className={classes.Service_item} onClick={handleService}>
			<div className={classes.Service_item_wrapper}>
				<div className={classes.name_icon}>
					<div className={classes.name}>
						<p>{service.name}</p>
					</div>
					<div
						className={classes.icon}
						style={{
							backgroundColor: `${service.backgroundColor}`,
						}}
					>
						<img src={service.icon} alt="cloudservice" />
					</div>
				</div>
				<div className={classes.red_green_sync}>
					<img src={greencolor} alt="greencolor" />
					<img src={redcolor} alt="redcolor" />
					<img src={Sync} alt="sync" style={{ height: '0.8rem', width: '0.8rem' }} />
				</div>
			</div>
		</div>
	);
};

export default Services;
