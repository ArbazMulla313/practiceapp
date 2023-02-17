import { Button, TextField } from "@mui/material";
import React, { useState } from "react"

 const ToDopractice = ()=>{
     const [text, setText]= useState('');
     const [ToDopractice,setToDopractice]= useState([]);
     const [copyToDopractice,setcopyToDopractice]= useState([]);
    

  const handleAddTask =()=>{
    if (!text.trim()) return
    setToDopractice([...ToDopractice,text])
    setcopyToDopractice([...ToDopractice,text])
    setText('')
  };
  const handleDeleteTask =(item,index)=>{
      const remainTask = ToDopractice.filter((elem,ind)=>ind !=index)
      setToDopractice(remainTask)
  }
  const handleSearchTask =(value)=>{
   const searchedItem = copyToDopractice.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase())) 
   console.log(searchedItem);
   setToDopractice(searchedItem)
  }
    return(
        <div>
            <h1>ToDopractice</h1>
            <TextField type="text"  
            placeholder="Search Here....."
            onChange={(e)=>handleSearchTask(e.target.value)}
            /> {' '}
            <TextField type="text"
             placeholder="Add ToDo"
              value={text} 
              onChange={(e)=>setText(e.target.value)} 
              />{' '}
            <Button variant="contained" onClick={()=>handleAddTask()}>Add Task</Button>
            <ol>
                {ToDopractice.map((item,index)=>{
                    return(
                    <li key={index}>{item}
                    <Button variant="contained">Edit</Button>{' '}
                    <Button variant="contained" color="error" onClick={()=>handleDeleteTask(item, index)}>Delete</Button>
                    </li>
                    
                    )
                })}
                
            </ol>
            
        </div>
    )
};
export default ToDopractice;