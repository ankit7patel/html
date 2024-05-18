function timer(){
    setInterval(watch,1000)
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    function watch(){
        if(seconds<=60){
            document.getElementById('second').innerHTML = seconds;
            seconds++;
        
        }
        else if(seconds>60){
            seconds=0;
            minutes++;
            document.getElementById('minute').innerHTML = minutes;
            if(minutes>60){
                minutes = 0;
                hours++;
                document.getElementById('hour').innerHTML = hours;
                if(hours === 24){
                    hours = 0;
                    days++;
                    document.getElementById('day').innerHTML = days;
                }

            }
        }
    }


}