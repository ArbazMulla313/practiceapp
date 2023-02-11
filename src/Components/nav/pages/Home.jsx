import React, { useState } from "react"

import axios from "axios"
export const Home=()=>{
    const[data,setData]=useState([])

    const getData= async () => {
               const res =await axios.get("https://jsonplaceholder.typicode.com/photos")
            //    const res =await axios.get("https://api.unsplash.com/users/samuelzeller/photos ")
               console.log(res.data)
            setData(res.data)
    }
    getData()
    return(
        <div>
<button onClick={getData}>GetData</button>
<h1>Home</h1>

{data.map((item,index)=>{
    return(
        <div key={index}>

            <img src={item.url} width={200} height={200}/>
        </div>
    )
})}
        </div>

    )
}