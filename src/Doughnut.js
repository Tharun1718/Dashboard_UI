import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Red', 'Blue', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
      width: 30,
      height: 30
    },
  ],
};


const options = {
  plugins: {
    legend: {
      display: "none",
      position: "none",
    },
  },
};

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {ctx, data} = chart;

    ctx.save();
    ctx.font = "20px bold sans-serif";
    ctx.fillStyle = 'black';
    ctx.alignText='left';
    ctx.fillText('65%',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
  }
}

export function DoughnutChart() {
  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
}

