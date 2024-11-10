import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'
import './contenido.module.css'
import Tarjeta from './Cards';
import ControlledCarousel from "./Carousel"

function Contenido() {
  return (
    <>
    <Router>
    <Nav/>
    <main>
      <aside>
        <Aside/>
      </aside>
        <section>
        <Tarjeta/>
        <ControlledCarousel/>
        </section>
    
    </main>
    </Router>
    </>
  )
}

export default Contenido
