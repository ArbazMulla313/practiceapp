import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button, TextField, Badge } from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const Home = () => {
  const [data, setData] = useState([]);
  const [copyData,setCopyData]=useState([])
  const [addToCart,setAddToCart]=useState([])

  async function addData() {
    const getData = await axios.get("https://fakestoreapi.com/products");
    setData(getData.data);
    setCopyData(getData.data);
    console.log(getData.data);
  }

  const handleAddtoCart=(item)=>{
    const duplicateCart=addToCart.some((elem)=>elem.id==item.id)
      if(!duplicateCart){
        setAddToCart([...addToCart,item])
      }
  }

  const handleFilter =(value)=>{
    const searchData=copyData.filter((item)=> item.title.toUpperCase().includes(value.toUpperCase()))
    setData(searchData)
  }

  const handleButtonSearch=(userCategory)=>{
    if("All" == userCategory){
      setData(copyData)
    }else{
      const search = copyData.filter((item)=>item.category.includes(userCategory))
      setData(search)
    }
  }

  useEffect(() => {
    addData();
  }, []);
  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: 1 }}>
        <Grid item xs={2} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch("men's clothing")}> Mens</Button>
        </Grid>
        <Grid item xs={2} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch("women's clothing")}>Womens</Button>
        </Grid>
        <Grid item xs={2} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch("electronics")}>Electric</Button>
        </Grid>
        <Grid item xs={2} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch("jewelery")}>Jewllory</Button>
        </Grid>
        <Grid item xs={1} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch("All")}>All</Button>
        </Grid>
        <Grid item xs={2} className="Button-container">
          <TextField label="search" fullWidth onChange={(e)=>handleFilter(e.target.value)}/>
        </Grid>
        <Grid item xs={1} className="Button-container">
        <Badge color="secondary" badgeContent={addToCart.length} showZero>
        <ShoppingCartIcon style={{ color: "#1976d2", fontSize: 40, cursor: "pointer" }}/>
        </Badge>
          
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Card sx={{ height: 350 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 40 }}
                  />
                  <h3>
                    Title : {item.title.substring(0, 20)}
                    {item.title.length > 20 && "..."}
                  </h3>
                  <h4>Price : ${item.price}</h4>
                  <Button variant="contained" color="error">
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "relative", left: 90 }}
                    onClick={()=>handleAddtoCart(item)}
                  >
                    Add to Card
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};