
setInterval(() => {
 let day = document.querySelector('.clock-day');
let hour = document.querySelector('.clock-hours');
let minute = document.querySelector('.clock-minutes');
let second = document.querySelector('.clock-seconds');
let meridiem = document.querySelector('.clock-meridiem');
let  daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];

// get time  by date funtion  
let date = new Date();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let d = date.getDay();


if (h > 12) {
    meridiem.innerText = 'PM';
    h = h - 12
}

h < 10 ? h = '0'+h: h;
m < 10 ? m = '0'+m: m;
s < 10 ? s = '0'+s: s;


hour.innerText = h;
minute.innerText = m;
second.innerText = s;
day.innerText = daylist[d]



}, 1000);



