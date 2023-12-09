import Services from './Services';
import github_service from '../../assets/github_service.svg';
import gitlab from '../../assets/gitlab.svg';
import bitbucket from '../../assets/bitbucket.svg';
import { useEffect, useRef } from 'react';
import useScrollToFocus from '../../hooks/useScrollToFocus';

const SourceCodeServices = () => {
	const services = [
		{
			icon: github_service,
			name: 'Github',
			backgroundColor: '#e9e9e9',
		},
		{
			icon: gitlab,
			name: 'Gitlab',
			backgroundColor: '#fcecea',
		},
		{
			icon: bitbucket,
			name: 'Bitbucket',
			backgroundColor: '#e0ecff',
		},
	];
	const ref = useRef(null);

	useScrollToFocus(ref);

	return (
		<div ref={ref}>
			<Services step="Step 2" typeofService="Source Code" services={services} />
		</div>
	);
};

export default SourceCodeServices;
