const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function refreshTime() {
     const time = new Date();

     const hh = (time.getHours()>12? (time.getHours() % 12) : time.getHours()>0? time.getHours() : 12).toString().padStart(2, '0');
     const mm = time.getMinutes().toString().padStart(2, '0');
     const ss = time.getSeconds().toString().padStart(2, '0');

     const DAY = days[time.getDay()];
     const DD = time.getDate().toString().padStart(2, '0');
     const MM = months[time.getMonth()];
     const YYYY = time.getFullYear();

     document.getElementById('day').innerText = `${DAY}`;
     document.getElementById('time').innerText = `${hh}:${mm}:${ss} ${hh>12? 'AM' : 'PM'}`;
     document.getElementById('date').innerText = `${DD} ${MM} ${YYYY}`;
}
refreshTime()
setInterval(refreshTime, 1000);