//dark mode
const body = document.querySelector("body"),
   sidebar = document.querySelector(".sidebar"),
   searchBtn = document.querySelector(".search-box"),
   modeSwitch = document.querySelector(".toggle-switch"),
   modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
   body.classList.toggle("dark");
});


//------------RangeBar chart
//-----1-------
var options = {
  series: [
    {
      data: [
        { x: '', y: [4000, 6800] },
        { x: '', y: [2000, 8500] },
        { x: '', y: [0, 10800] },
        { x: '', y: [900, 10000] },
        { x: '', y: [3600, 7500] },
      ]
    },
  ],
  chart: {
    height: 140,
    width: 120,
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    offsetX: 75,
    offsetY: -5,
  },
  plotOptions: {
    bar: {
      isDumbbell: false,
      columnWidth: '20%',
      borderRadius: 2,
      dumbbellColors: [['#008FFB', '#00E396']]
    },
  },
  legend: {
    show: false
  },
  fill: {
    colors: ['#fd5367'],
    opacity: 1
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  colors: ['#fd5367']
};

var wave = new ApexCharts(document.querySelector(".wave"), options);
wave.render();


//-----2-------
var options = {
  series: [
    {
      data: [
        { x: '', y: [4000, 6800] },
        { x: '', y: [2000, 8500] },
        { x: '', y: [0, 10800] },
        { x: '', y: [900, 10000] },
        { x: '', y: [3600, 7500] },
      ]
    },
  ],
  chart: {
    height: 140,
    width: 120,
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    offsetX: 75,
    offsetY: -5,
  },
  plotOptions: {
    bar: {
      isDumbbell: false,
      columnWidth: '20%',
      borderRadius: 2,
      dumbbellColors: [['#008FFB', '#00E396']]
    },
  },
  legend: {
    show: false,
    showForSingleSeries: false,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    gradient: {
      type: 'vertical',
      gradientToColors: ['#00E396'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  colors: ['#3b96feed']
};

var wave2 = new ApexCharts(document.querySelector(".wave2"), options);
wave2.render();

//-----3-------
var options = {
  series: [
    {
      data: [
        { x: '', y: [4000, 6800] },
        { x: '', y: [2000, 8500] },
        { x: '', y: [0, 10800] },
        { x: '', y: [900, 10000] },
        { x: '', y: [3600, 7500] },
      ]
    },
  ],
  chart: {
    height: 140,
    width: 120,
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    offsetX: 75,
    offsetY: -5,
  },
  plotOptions: {
    bar: {
      isDumbbell: false,
      columnWidth: '20%',
      borderRadius: 2,
      dumbbellColors: [['#008FFB', '#00E396']]
    },
  },
  legend: {
    show: false,
    showForSingleSeries: false,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    gradient: {
      type: 'vertical',
      gradientToColors: ['#00E396'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  colors: ['#f9b43c']
};

var wave3 = new ApexCharts(document.querySelector(".wave3"), options);
wave3.render();

//-----4-------
var options = {
  series: [
    {
      data: [
        { x: '', y: [4000, 6800] },
        { x: '', y: [2000, 8500] },
        { x: '', y: [0, 10800] },
        { x: '', y: [900, 10000] },
        { x: '', y: [3600, 7500] },
      ]
    },
  ],
  chart: {
    height: 140,
    width: 120,
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    offsetX: 75,
    offsetY: -5,
  },
  plotOptions: {
    bar: {
      isDumbbell: false,
      columnWidth: '20%',
      borderRadius: 2,
      dumbbellColors: [['#008FFB', '#00E396']]
    },
  },
  legend: {
    show: false,
    showForSingleSeries: false,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    gradient: {
      type: 'vertical',
      gradientToColors: ['#00E396'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  colors: ['rgb(11, 199, 11)']

};

var wave4 = new ApexCharts(document.querySelector(".wave4"), options);
wave4.render();



//another page
function myFunction() {
  location.replace('tickets.html');
}
function clickedButton() {
  location.replace('index.html');
}
function addTicket() {
  location.replace('addTicket.html');
};