import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

// Plugin for centered text
const centerText = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.save();
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText('2 Total', width / 2, height / 2);
    ctx.restore();
  }
};

const CloudAccountChart = () => {
  const data = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#2F80ED', '#B3D4FC'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    cutout: '70%',
    plugins: { legend: { display: false } },
    maintainAspectRatio: false
  };

  return (
    <div className="d-flex">
      <div style={{ width: '50%', minHeight: '200px' }}>
        <Doughnut data={data} options={options} plugins={[centerText]} />
      </div>
      <div className="ps-3 small d-flex flex-column justify-content-center">
        <div>
          <span className="me-2 d-inline-block" style={{ backgroundColor: '#2F80ED', width: 10, height: 10, borderRadius: '50%' }} />
          Connected (2)
        </div>
        <div>
          <span className="me-2 d-inline-block" style={{ backgroundColor: '#B3D4FC', width: 10, height: 10, borderRadius: '50%' }} />
          Not Connected (2)
        </div>
      </div>
    </div>
  );
};

export default CloudAccountChart;
