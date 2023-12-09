import Services from './Services';
import mongodb from '../../assets/mongodb.svg';
import redis from '../../assets/redis.svg';
import Postgresql from '../../assets/Postgresql.svg';
import { useEffect, useRef } from 'react';
import useScrollToFocus from '../../hooks/useScrollToFocus';

const DatabaseServices = () => {
	const services = [
		{
			icon: mongodb,
			name: 'MongoDB',
			backgroundColor: '#edf5ed',
		},
		{
			icon: redis,
			name: 'Redis',
			backgroundColor: '#fbeae9',
		},
		{
			icon: Postgresql,
			name: 'Postgresql',
			backgroundColor: '#ebf0f4',
		},
	];
    const ref = useRef(null);

    useScrollToFocus(ref);


	return (
		<div ref={ref}>
			<Services step="Step 3" typeofService="DataSource" services={services} />
		</div>
	);
};

export default DatabaseServices;
