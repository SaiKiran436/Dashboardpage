import React from 'react';
import './ChartStyles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { ProgressBar } from 'react-bootstrap';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ImageRiskChart = () => {
  const data = {
    labels: ['Critical', 'High', 'Medium'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: [968, 559, 0],
        backgroundColor: ['#EB5757', '#F2994A', '#F2C94C'],
        borderRadius: 8,
        barThickness: 25,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: {
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div>
      <div className="fw-bold mb-2">1470 <small className="text-muted">Total Vulnerabilities</small></div>
      <ProgressBar className="mb-2" style={{ height: '18px', borderRadius: '10px' }}>
        <ProgressBar variant="danger" now={900 / 1470 * 100} key={1} />
        <ProgressBar variant="warning" now={550 / 1470 * 100} key={2} />
        <ProgressBar variant="secondary" now={20 / 1470 * 100} key={3} />
      </ProgressBar>
      <div className="d-flex justify-content-between small text-muted px-1">
        <span><span className="legend-dot bg-danger" /> Critical (900)</span>
        <span><span className="legend-dot bg-warning" /> High (550)</span>
        <span><span className="legend-dot bg-secondary" /> Medium (20)</span>
      </div>
    </div>
  );
};

export default ImageRiskChart;
