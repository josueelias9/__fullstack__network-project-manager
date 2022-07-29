import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Hector',
      data: [ {x:5,y:3,r:20}],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Josue',
      data: [ {x:1,y:2,r:20}],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Luisandra',
      data: [ {x:9,y:4,r:20}],
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
    {
      label: 'Marco',
      data: [ {x:2,y:4,r:20}],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Armando',
      data: [ {x:5,y:5,r:20}],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
    {
      label: 'Estefajo',
      data: [ {x:3,y:9,r:20}],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
],
};

export function MyChart2() {
  return <Bubble options={options} data={data} />;
}
