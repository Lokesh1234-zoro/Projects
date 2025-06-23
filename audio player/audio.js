let main = document.getElementById("ok");
let images=document.getElementById("main"); 
let prevbutton = document.getElementById("prev");
let nextbutton = document.getElementById("next");

let play=document.getElementById("play");
let Restart=document.getElementById("restart");
let Vup=document.getElementById("vup");
let Vdown=document.getElementById("vdown");
let Pause=document.getElementById("pause")
let Audioplayer= new Audio("/audios/first.mp3")

let i=0
let img =["luffy1","linkdin","net","zoro1"]
let Audios=["first","espresso","shapeofyou","espresso"]
console.log(Audioplayer)
Audioplayer.volume=1
Vup.addEventListener('click',()=>{

    if(Audioplayer.volume<=0.99)
    {
       Audioplayer.volume= Audioplayer.volume+0.1
        console.log(Audioplayer.volume)
    }
    else
    {
        console.log("volume is maximum")
        
        Audioplayer.volume=1;
    }
})

Vdown.addEventListener('click',()=>{
    if(Audioplayer.volume>0.1){
        Audioplayer.volume=Audioplayer.volume-0.1
                console.log(Audioplayer.volume)

    }else{
        Audioplayer.volume=0
console.log("volume is minimum")
    }
})

nextbutton.addEventListener('click', ()=>{
    
    if(i<img.length-1)
    {
        i++
    }else{
        i=0
    }
    
images.src="/images/"+img[i]+".jpg";
Audioplayer.src="/audios/"+Audios[i]+".mp3"
Audioplayer.play();
});



prevbutton.addEventListener('click', () => {

    if(i<=0){
        i=img.length-1
    }else{
        i--;
    }
    images.src="/images/"+img[i]+".jpg";
Audioplayer.src="/audios/"+Audios[i]+".mp3"
Audioplayer.play();
    
});

play.addEventListener('click',()=>{
    Audioplayer.play();
})

Pause.addEventListener('click',()=>{
Audioplayer.pause()
})
Restart.addEventListener('click',()=>{
    Audioplayer.currentTime=0
    Audioplayer.play()
})
