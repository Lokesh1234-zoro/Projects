import img1 from './images/luffy1.jpg'
import img2 from './images/zoro1.jpg'
import img3 from './images/NAMI.jpg'
import img4 from './images/ussop.jpg'
import img5 from './images/sanji.jpg'
import img6 from './images/net.jpg'
import img7 from './images/linkdin.jpg'
import img8 from './images/chopper.jpg'
import img9 from './images/franky.jpeg'
import { useState } from 'react'
import Luffy from './luffy.jsx'


function Animelist(){
  let [Animes,setAnimes]=useState([{
      id: 1,
      image: img1,
      name: 'Luffy',
    },
    {
      id: 2,
      image: img2,
      name: "ZORO",
    },
    {
      id: 3,
      image: img3,
      name: "NAMI",
    },
    {
      id: 4,
      image: img4,
      name: "USOPP",
    },
    {
      id: 5,
      image: img5,
      name: "SANJI",
    },
    {
      id: 6,
      image: img6,
      name: "NET",
    },
    {
      id: 7,
      image: img7,
      name: "LINKDIN",
    },
     {
      id: 8,
      image: img8,
      name: "CHOPPER",
    },
    {
      id: 9,
      image: img9,
      name: "FRANKY",
    },

  ])
   let Deletecard=(id)=>{
    let newList=Animes.filter((ani)=>ani.id!=id)
    setAnimes(newList)

   }
  
   
      

  let animeslist= Animes.map((s) => <Luffy image={s.image} text={s.name} delete={()=>Deletecard(s.id)} />);

    return(
       <div>
        {animeslist}
       </div>

    )



}
export default Animelist