import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

let labels = [];

let data = {};


function CompProyecto(props) {

    const dataProyecto = props.dataProyecto;

    labels = dataProyecto.map((d) => { return d.cliente });

    data = {
        labels,
        datasets: [
            {
                label: 'flujosTotal',
                data: dataProyecto.map((d) => d.flujosTotal),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'flujosResueltos',
                data: dataProyecto.map((d) => d.flujosResueltos),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return <Bar options={options} data={data} />;

}

export default CompProyecto;