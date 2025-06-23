let Searchbox=document.getElementById("searchbox");
let Weatherbtn=document.getElementById("weatherbtn");
let City=document.getElementById("cityname")
let Temp=document.getElementById("temp")
let Wind=document.getElementById("wind");
let Des=document.getElementById("des");
let promise1=new Promise(function(resolve,reject){
  
     let success=true;

     if(success){
        resolve("Task completed");
     }
     else{

        reject("Task failed");
     }



})

promise1.then((msg)=>{


    console.log(msg,"by then")
}).catch((err)=>{
    console.log(err,"by catch")
})



  
Weatherbtn.addEventListener('click',()=>{


  let city=Searchbox.value;
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=91db175658bddd8b73fc901513100a7a&units=metric")
    .then((response)=>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  }).then((data)=>{
    console.log(data);
    City.innerText=data.name;
    Temp.innerText=data.main.temp;
    Wind.innerHTML="wind speed:"+data.wind.speed+"m/s";
    Des.innerHTML=data.weather[0].description;
  }).catch((err)=>{
    console.log(err);
  });

})
