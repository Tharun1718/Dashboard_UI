import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
      display: 'none'
    },
    title: {
      display: true,
      text: 'Overview',
      align: 'start',
      padding: {
        bottom: 5
      },
    },
    subtitle: {
      display: true,
      text: 'Monthly Earning',
      align: 'start',
      fontWeight: 'lighter',
      color: 'grey',
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      border: {
        display: false
      }
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false
      }
    }
  }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

// const fillBarChart = (val) => {
//   if(val == '95'){
//     backgroundColor: 'blue'
//   }else{
//     backgroundColor: 
//   }
//   return backgroundColor
// }

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [60,40,95,65,75,30,77,95,90,80,75,82],
      backgroundColor: '#eef0f8',
      borderRadius: 8,
      borderSkipped: false
    }
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
