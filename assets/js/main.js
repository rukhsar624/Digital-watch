clock();
setInterval( clock, 1000 );
function clock() {
  var d = new Date();
  
  // get year
  var year = d.getFullYear().toString().padStart(2, '0');
  
  // get month - from 0 to 11
  var month = ( d.getMonth() + 1 ).toString().padStart(2, '0');
  
  // get day of the month - from 1 to 31
  var day = d.getDate().toString().padStart(2, '0');
  
  // get day of the week - from 0 to 6
  // get name of the weekday, 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
  switch ( d.getDay() ) {
    case 1: 
      var weekDay = 'MON'; break;
    case 2: 
      var weekDay = 'TUE'; break;
    case 3: 
      var weekDay = 'WED'; break;
    case 4: 
      var weekDay = 'THU'; break;
    case 5: 
      var weekDay = 'FRI'; break;
    case 6: 
      var weekDay = 'SAT'; break;
    case 0: 
      var weekDay = 'SUN'; break;
  }
  
  // add leading zero
  var hr = d.getHours().toString().padStart(2, '0');
  var min = d.getMinutes().toString().padStart(2, '0');
  var sec = d.getSeconds().toString().padStart(2, '0');
  
  // set content of date
  document.querySelector('.date').innerHTML = year + '-' + month + '-' + day + ' ' + weekDay;
  
  // set content of hour
  document.querySelector('.hr').innerHTML = hr;
  
  // set content of minute
  document.querySelector('.min').innerHTML = min;
  
  // set content of second
  document.querySelector('.sec').innerHTML = sec;
}

// when elment with class 'toggle-btn' is clcked, 
document.querySelector('.toggle-btn').onclick = () => {
  
  
};