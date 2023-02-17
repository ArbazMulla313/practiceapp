import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
const Todoo =()=>{
    const[text,setText]=useState('')
    const [Todoo,setTodoo]=useState([]);
    const[copyTodoo,setcopyTodoo]=useState([])


    const handleAddTask =()=>{
        if (!text.trim()) return;
        setTodoo([...Todoo,text]);
        setcopyTodoo([...copyTodoo,text])
        setText('')

    }
        const handleDeleteTask =(item,index)=>{
        const remainTask=Todoo.filter((elem,ind)=>ind !=index);
          setTodoo(remainTask);
        }
        const handleSearchTask=(value)=>{
            const searchItem=copyTodoo.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()));
            console.log(searchItem);
            setTodoo(searchItem)

        }
    return(


        <div>
        <h1>TODO Practice set</h1>
        <TextField type="text" label='Searching...' 
        onChange={(e)=>handleSearchTask(e.target.value)}/>
        <TextField type="text" label="Type TODO"
        value={text}
        onChange={(e)=>setText(e.target.value)} />{' '}
        <Button variant="contained" onClick={()=>handleAddTask()}>Add Task</Button>
        <ol>
            {Todoo.map((item,index)=>{
                return(

                    <li key={index}>
                        {item}
                        <Button onClick={()=>(item,index)}>Edit</Button>
                        <Button onClick={()=>handleDeleteTask(item,index)}>Delete</Button>
                   </li>
                )
            })}
        </ol>
    </div>
        )
}
export default Todoo;