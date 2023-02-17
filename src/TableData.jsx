import React, { useState } from 'react';
import { TextField, Table, Button } from '@mui/material';

 export const TableData = () => {
const [fName,setFName]=useState('')
const [lName,setLName]=useState('')
const [fullName,setFullName]=useState('')
const [num,setNum]=useState('')
const [dob,setDob]=useState('')
const [address,setAddress]=useState('')
const [tableData,setTableData]=useState([])
const handleSubmit=()=>{
    setTableData([...tableData,{fName,lName,fullName,num,dob,address}])
    
    setFName("");
    setLName("");
    setFullName("");
    setDob("");
    setNum("");
    setAddress("");
}
    return (
        <div>
            
          <TextField variant='outlined' label="First Name" value={fName} onChange={(e)=>setFName(e.target.value)}/>  
          <TextField variant='outlined' label="Last Name" value={lName} onChange={(e)=>setLName(e.target.value)}/>  
          <TextField variant='outlined' label="Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>  
          <TextField variant='outlined' label="Number" value={num} onChange={(e)=>setNum(e.target.value)}/>  
          <TextField variant='outlined' type="Date"  label="Dob"value={dob} onChange={(e)=>setDob(e.target.value)}/>  
          <TextField variant='outlined' label="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />  
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            <Table border={2}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Full Name</th>
                    <th>Number</th>
                    <th>Dob</th>
                    <th>Address</th>
                </tr>
                 {tableData.map((item)=>{
                    return(
                   <tr>
                    <td>{item.fName}</td>
                    <td>{item.lName}</td>
                    <td>{item.fullName}</td>
                    <td>{item.num}</td>
                    <td>{item.dob}</td>
                    <td>{item.address}</td>
                   </tr>
                    )
                })}
                
            </Table>
        </div>
    );
};