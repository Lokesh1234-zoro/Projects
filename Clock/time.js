let Hours=document.getElementById("hrs")
let Minutes=document.getElementById("mins")
let Seconds=document.getElementById("secs")
let time=document.getElementsByClassName("time")
let AmPm=document.getElementById("amorpm")

 


setInterval(()=>
    {
       let dat=new Date()
       let hour=dat.getHours()
       if(hour>12){
          AmPm.innerHTML="pm"
        
       }
       if(hour>12){
           hour=hour-12
       }
       if(hour<10){
        hour="0"+hour
       }
let minutes=dat.getMinutes()
if(minutes<10){
        minutes="0"+minutes
       }

let seconds=dat.getSeconds()
if(seconds<10){
        seconds="0"+seconds
       }
Hours.innerHTML=hour
Minutes.innerHTML=minutes
Seconds.innerHTML=seconds
    
}
,1000)

