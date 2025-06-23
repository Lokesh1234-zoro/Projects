import { useState } from 'react'
import img1 from './images/luffy1.jpg'


function Luffy(props){
 let [Fav,setFav]=useState("add to Fav")
 let [Added,setchange]=useState("want to add")

let changeFav=()=>{
    if(Fav=="Added to Fav"){
        setFav("Add to Fav")
        setchange("want to add ")
    

    }else{
        setFav("Added to Fav")
        setchange("Added")
    }
    
}

    return (
        <div className="luffy">
            <img  id="img" src={props.image} alt="" />
            <p id="text">{props.text}</p>
            <button id='b1' onClick={changeFav}>{Fav}</button>
            <p >{Added}</p>
            <button onClick={props.delete}>Delete</button>
        </div> 
    )
}
export default Luffy