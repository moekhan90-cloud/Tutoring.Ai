// components/ProgressCharts.jsx
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  BarElement, PointElement, LineElement,
  Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export function AccuracyOverTime({ attempts }) {
  const labels = attempts.map(a => new Date(a.createdAt).toLocaleDateString());
  const data = {
    labels,
    datasets: [{
      label: 'Accuracy %',
      data: attempts.map(a => Math.round((a.score / a.total) * 100)),
      borderWidth: 2
    }]
  };
  return <Line data={data} />;
}

export function TopicMastery({ topicStats }) {
  const labels = topicStats.map(t => t.topic || '—');
  const data = {
    labels,
    datasets: [{
      label: 'Accuracy %',
      data: topicStats.map(t => t.accuracy)
    }]
  };
  return <Bar data={data} />;
}
