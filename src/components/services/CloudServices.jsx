import Services from './Services';
import AWS from '../../assets/AWS.svg';
import gcp from '../../assets/gcp.svg';
import { useEffect, useRef } from 'react';
import useScrollToFocus from '../../hooks/useScrollToFocus';

const CloudServices = () => {
	const services = [
		{
			icon: AWS,
			name: 'AWS',
			backgroundColor: '#fff5e5',
		},
		{
			icon: gcp,
			name: 'GCP',
			backgroundColor: '#ecf3fe',
		},
	];

    const ref = useRef(null);

    useScrollToFocus(ref);

	return (
		<div ref={ref}>
			<Services step="Step 1" typeofService="Cloud" services={services} />
		</div>
	);
};

export default CloudServices;
