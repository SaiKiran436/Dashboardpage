import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const centerText = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.save();
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText('9659 Total', width / 2, height / 2);
    ctx.restore();
  }
};

const CloudRiskChart = () => {
  const data = {
    labels: ['Failed', 'Warning', 'Not available', 'Passed'],
    datasets: [
      {
        data: [1689, 681, 36, 7253],
        backgroundColor: ['#EB5757', '#F2C94C', '#BDBDBD', '#27AE60'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false // ✅ Hides built-in legend
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="d-flex">
      <div style={{ width: '50%', minHeight: '200px' }}>
        <Doughnut data={data} options={options} plugins={[centerText]} />
      </div>
      <div className="ps-3 small d-flex flex-column justify-content-center">
        <div><span className="me-2 d-inline-block" style={{ backgroundColor: '#EB5757', width: 10, height: 10, borderRadius: '50%' }} /> Failed (1689)</div>
        <div><span className="me-2 d-inline-block" style={{ backgroundColor: '#F2C94C', width: 10, height: 10, borderRadius: '50%' }} /> Warning (681)</div>
        <div><span className="me-2 d-inline-block" style={{ backgroundColor: '#BDBDBD', width: 10, height: 10, borderRadius: '50%' }} /> Not available (36)</div>
        <div><span className="me-2 d-inline-block" style={{ backgroundColor: '#27AE60', width: 10, height: 10, borderRadius: '50%' }} /> Passed (7253)</div>
      </div>
    </div>
  );
};

export default CloudRiskChart;
