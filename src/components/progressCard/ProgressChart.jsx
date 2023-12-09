
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell} from 'recharts';


const ProgressChart = () => {

      const progressAmount = useSelector((state) => state.progressAmount.quantity);

        const data = [
            { value:100-progressAmount },
            { value:  progressAmount },
        ];
        const COLORS = ['#c7ceff', '#0d64de'];

		return (
			<PieChart width={240} height={120} >
				<Pie
					data={data}
					innerRadius={40}
					outerRadius={60}
					paddingAngle={5}
					dataKey="value"
				>
					{data.map((entry,index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		);
}

export default ProgressChart;
