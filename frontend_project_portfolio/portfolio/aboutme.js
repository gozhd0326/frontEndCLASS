const data = document.getElementById('html1');
const css1 = document.getElementById('css1');
const javascript1 = document.getElementById('javascript1');
new Chart(html1,
  {type: 'doughnut',
  data: {
    labels: [
      'HTML', 'proficiency to be raised in the future'
    ],
    datasets: [{
      label:'Proficiency',
      data: [5,95],
      backgroundColor: [
        'rgb(42, 0, 58)',
        'rgba(216, 191, 216, 0)'
      ],
      hoverOffset: 4
    }]
  }}
);
new Chart(css1,
  {type: 'doughnut',
  data: {
    labels: [
      'CSS' , 'proficiency to be raised in the future'
    ],
    datasets: [{
      label: 'Proficiency',
      data: [3,97],
      backgroundColor: [
        'rgb(42, 0, 58)',
        'rgba(216, 191, 216, 0)'
      ],
      hoverOffset: 4
    }]
  }}
);
new Chart(javascript1,
  {type: 'doughnut',
  data: {
    labels: [
      'JAVASCRIPT', 'proficiency to be raised in the future'
    ],
    datasets: [{
      label: 'Proficiency',
      data: [1,99],
      backgroundColor: [
        'rgb(42, 0, 58)',
        'rgba(216, 191, 216, 0)'
      ],
      hoverOffset: 4
    }]
  }}
);