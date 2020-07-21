
document.getElementById("myBtn").addEventListener("click", toggleNav);
 function toggleNav(){
     if ( document.getElementById("mySidenav").style.width == "250px") {
         return close();
     }
     else{
       return open();
     }
 }
 function open() {
   if($(window).width() <= 1200)
 {
       document.getElementById("mySidenav").style.width="250px";
       document.getElementById("main").style.marginLeft="0px";     
   }
   else{
     document.getElementById("mySidenav").style.width="250px";
     document.getElementById("main").style.marginLeft="250px";     	
   }
 }
 function close() {
         document.getElementById("mySidenav").style.width = "0";
         document.getElementById("main").style.marginLeft = "0";
 }

 var ctx = document.getElementById('myChart').getContext('2d');
 var myLineChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: '',
             data: [80,90,80,100,90],
             pointRadius: 0,
             display: false,
             backgroundColor: [
                 'rgba(191, 247, 205, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(139, 248, 148, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {

         scales: {
             xAxes: [{
                 ticks: {
                     display: false //this will remove only the label
                 },
                 gridLines: {
                     display: false
                 }
             }],
             yAxes: [{
                 ticks: {
                     display: false //this will remove only the label
                 },
                 gridLines: {
                     display: false
                 }
             }],

         },
         legend: {
             display: false
         }
     }
 });

 var ctx = document.getElementById('myChart2').getContext('2d');
 var myLineChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: '',
             data: [100,90,100,80,100],
             pointRadius: 0,
             display: false,
             backgroundColor: [
                 'rgba(116, 162, 253, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(43, 107, 248, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {

         scales: {
             xAxes: [{
                 ticks: {
                     display: false //this will remove only the label
                 },
                 gridLines: {
                     display: false
                 }
             }],
             yAxes: [{
                 ticks: {
                     display: false //this will remove only the label
                 },
                 gridLines: {
                     display: false
                 }
             }],

         },
         legend: {
             display: false
         }
     }
 });

