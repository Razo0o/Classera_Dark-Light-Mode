
//dark mode
const body = document.querySelector("body"),
   sidebar = document.querySelector(".sidebar"),
   searchBtn = document.querySelector(".search-box"),
   modeSwitch = document.querySelector(".toggle-switch"),
   modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
   body.classList.toggle("dark");
});

// -----Area Chart
var options = {
   chart: {
      type: "area",
      height: 260,
      foreColor: "var(--text-color)",
      toolbar: {
         autoSelected: "pan",
         show: false
      },
      total: {
         enabled: false

      },

   },
   dataLabels: {
      enabled: false
   },
   title: {
      text: 'Tickets Overview',
      style: {
         fontSize: '13px',
         fontWeight: 600,
         fontFamily: 'Poppins'
      }
   },
   series: [
      {
         name: "Series 1",
         data: [30, 200, 150, 450, 360, 550, 300]

      }

   ],
   fill: {
      gradient: {
         enabled: false,
         opacityFrom: 0.9,
         opacityTo: 0.2
      }
   },
   xaxis: {
      categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul"
      ]
   },
   grid: {
      borderColor: "#555",
      clipMarkers: true,
      yaxis: {
         lines: {
            show: false
         }
      }
   },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// -----Range
const range = document.querySelector('.custom-range');
const rangeValue = document.querySelector('.range1');
function updateRange() {
   const value = range.value;
   range.style.setProperty('--slider-value', `${value}%`);
   rangeValue.textContent = `${value}%`;

   const rangeWidth = range.offsetWidth;
   const thumbWidth = 20; // Match the thumb width in CSS
   const offset = (value / range.max) * (rangeWidth - thumbWidth);

   rangeValue.style.left = `calc(${offset}px + ${thumbWidth / 2}px)`;
}

updateRange();

range.addEventListener('input', updateRange);



// -----Bar Chart

var optionss = {

   series: [
      {
         name: 'Within One Day',
         data: [80, 44]
      }, {
         name: 'Within Two Days',
         data: [7, 39]
      }, {
         name: 'Within Four Days',
         data: [5, 11]
      }, {
         name: 'More Than Four Days',
         data: [4, 6]
      },],

   chart: {
      type: 'bar',
      height: 190,
      foreColor: "var(--text-color)",
      stacked: true,
      stackType: '100%',

      toolbar: {
         show: false
      },

      offsetY: 15,

   },
   plotOptions: {
      bar: {
         horizontal: true,
      },
   },
   stroke: {
      width: 1,
      colors: ["var(--sidebar-color)"],
      transition: 'var(--tran-05)',
   },
   title: {
      text: 'Response & Resolution Time',
      style: {
         fontSize: '13px',
         fontWeight: 600,
         fontFamily: 'Poppins'
      },
      offsetY: -5,

   },
   xaxis: {

      categories: ['Response Time', 'Resolution Time'],
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
         formatter: function (val) {
            return val
         },

      },
   },
   yaxis: {
      title: {
         text: undefined
      },

   },
   tooltip: {
      shared: false,
      y: {
         formatter: function (val) {
            return val
         }
      }
   },
   fill: {
      opacity: 1

   },
   legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 35,
      offsetY: -5,
      fontSize: '10px',
      // fontWeight: 600,
      // fontFamily: 'Poppins'
      // height: 25,
   },
   colors: ['#3b96fe', '#26c6da', '#f9b43c', '#fd5367'],


};

var chart = new ApexCharts(document.querySelector("#chart2"), optionss);
chart.render();


//another page
function myFunction() {
   location.replace('tickets.html');
}
function clickedButton() {
   location.replace('index.html');
}


