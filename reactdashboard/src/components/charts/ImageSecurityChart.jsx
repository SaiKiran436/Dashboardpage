import React from 'react';
import './ChartStyles.css';
import { ProgressBar } from 'react-bootstrap';

const ImageSecurityChart = () => {
  const data = {
    labels: ['Critical', 'High'],
    datasets: [
      {
        data: [1, 1],
        backgroundColor: ['#EB5757', '#F2994A'],
        barThickness: 25,
        borderRadius: 8,
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
      <div className="fw-bold mb-2">2 <small className="text-muted">Total Images</small></div>
      <ProgressBar className="mb-2" style={{ height: '18px', borderRadius: '10px' }}>
        <ProgressBar variant="danger" now={1 / 2 * 100} key={1} />
        <ProgressBar variant="warning" now={1 / 2 * 100} key={2} />
      </ProgressBar>
      <div className="d-flex justify-content-between small text-muted px-1">
        <span><span className="legend-dot bg-danger" /> Critical (1)</span>
        <span><span className="legend-dot bg-warning" /> High (1)</span>
      </div>
    </div>
  );
};

export default ImageSecurityChart;
