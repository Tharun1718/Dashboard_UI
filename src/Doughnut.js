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
    },
  ],
};

// export const options = {
//     cutoutPercentage: 70,
//     responsive: true,
//     maintainAspectRatio: false,
//     legend: {
//         display: false,
//     },
//     elements: {
//         center: {
//             text: 'Red is a 2/3',
//             color: '#36A2EB',
//         }
//     }
// }

const options = {
  plugins: {
    legend: {
      display: "none",
      position: "none",
    },
  },
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}

