import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import { Home } from '../Components/nav/pages/Home'
import {About} from "../Components/nav/pages/About"
import { Contect } from '../Components/nav/pages/Contect'
import { Blog } from '../Components/nav/pages/Blog'
export const RouteData = () => {
  return (
    <div>
      
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contect" element={<Contect/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
            </BrowserRouter>
      
    </div>
  )
}
