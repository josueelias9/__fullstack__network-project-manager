var ctx = document.getElementById('myChartz').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['ss', 'February', 'March', 'April', 'May', 'June', 'July','ss', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [100, 10, 5, 2, 20, 30, 45,100, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});