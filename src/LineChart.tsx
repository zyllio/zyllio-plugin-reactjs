import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  title: string
  labels: string[]
  values: string[]
}

export function LineChart(props: Props) {
 
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  }

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.values,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  }

  return <Line options={options} data={data} />;
}

export default LineChart;
