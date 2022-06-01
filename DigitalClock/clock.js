var time;
var ampm, hours, minutes, seconds, finalHours;  
var timeString;


setInterval(() => {
    time = new Date();
    ampm = time.getHours()>12?"pm":"am";

    
    minutes = time.getMinutes()<10? "0"+time.getMinutes():time.getMinutes();
    seconds = time.getSeconds()<10? "0"+time.getSeconds():time.getSeconds();
    Hours = time.getHours()>12? time.getHours()-12: time.getHours();


    timeString = Hours+":"+ minutes+":"+ seconds + " "+ ampm;
    document.getElementById('time').innerHTML = timeString;
}, 1000);