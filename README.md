# digital  Clock in  javascript 
 ![Digital clock image ](https://i.ibb.co/9ccNY1h/Screenshot-1.png)
 
 ## HTML Code Here ........
 ```HTML 
    <div class="clock-container">
        <div class="clock-col">
          <p class="clock-day clock-timer">TH
          </p>
          <p class="clock-label">
            Day
          </p>
        </div>
        <div class="clock-col">
          <p class="clock-hours clock-timer">19
          </p>
          <p class="clock-label">
            Hours
          </p>
        </div>
        <div class="clock-col">
          <p class="clock-minutes clock-timer">20
          </p>
          <p class="clock-label">
            Minutes
          </p>
        </div>
        <div class="clock-col">
          <p class="clock-seconds clock-timer">50
          </p>
          <p class="clock-label">
            Seconds
          </p>
        </div>
        <div class="clock-col">
          <p class="clock-meridiem clock-timer">AM
          </p>
          <p class="clock-label">
            meridiem
          </p>
        </div>
      </div>
 ```
 
 ## Javascript Code Here ....
 ```javascript
 
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




 ```
