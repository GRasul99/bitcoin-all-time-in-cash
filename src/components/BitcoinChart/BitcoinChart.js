const BITCOINCHART = document.getElementById('bitcoin-chart')
let chart = new Chart(BITCOINCHART, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'June', 'July', 'August'],
    datasets: [ {
      pointBorderColor: 'rgba(75,192,192,1)',
      pointRadius: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
    }]
  }
})
