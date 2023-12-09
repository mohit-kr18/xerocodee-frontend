import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CloudServices from '../services/CloudServices';
import SourceCodeServices from '../services/SourceCodeServices';
import DatabaseServices from '../services/DatabaseServices';
import { PiCircleFill } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const Stepper = () => {
	const cloudServices = useSelector((state) => state.cloudService.data);
	const sourceCodeServices = useSelector((state) => state.sourceCodeService.data);
	// const databaseServices = useSelector((state) => state.databaseService.data);

	return (
		<Timeline
			sx={{
				[`& .${timelineItemClasses.root}:before`]: {
					flex: 0,
					padding: 0,
					
				},
			}}
		>
			<TimelineItem sx={{zIndex: 0}}>
				<TimelineSeparator>
					<TimelineDot color="primary">
						<PiCircleFill color="white" />
					</TimelineDot>
					<TimelineConnector
						sx={{
							border: '2px solid white',
							outlineStyle: 'solid',
							outlineColor: '#e9e9e9',
							borderRadius: '1rem',
						}}
					></TimelineConnector>
				</TimelineSeparator>
				<TimelineContent>
					<CloudServices />
				</TimelineContent>
			</TimelineItem>
			{cloudServices && (
				<TimelineItem
					sx={{
						transform: '1s ',
					}}
				>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<PiCircleFill color="white" />
						</TimelineDot>
						<TimelineConnector
							sx={{
								border: '2px solid white',
								outlineStyle: 'solid',
								outlineColor: '#e9e9e9',
								borderRadius: '1rem',
							}}
						></TimelineConnector>
					</TimelineSeparator>
					<TimelineContent>
						<SourceCodeServices />
					</TimelineContent>
				</TimelineItem>
			)}
			{sourceCodeServices && (
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<PiCircleFill color="white" />
						</TimelineDot>
						<TimelineConnector
							sx={{
								border: '2px solid white',
								outlineStyle: 'solid',
								outlineColor: '#e9e9e9',
								borderRadius: '1rem',
							}}
						></TimelineConnector>
					</TimelineSeparator>
					<TimelineContent>
						<DatabaseServices />
					</TimelineContent>
				</TimelineItem>
			)}
		</Timeline>
	);
};

export default Stepper;
