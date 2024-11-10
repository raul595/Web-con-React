import React from 'react'
import Header from './Header'
import Contenido from './Contenido'
import Footer from './Footer'

function Web() {
  return (
    <>
    <Header/>
    <Contenido/>
    <Footer RRSS={[{nombre:"Facebook",url:"https://www.facebook.com/p/Ies-Cura-Valera-100011212297789/?locale=es_LA"},{nombre:"Instagram",url:"https://www.instagram.com/explore/locations/115645025115521/ies-cura-valera/"},{nombre:"Linkedin",url:"https://es.linkedin.com/"},{nombre:"Google",url:"https://google.es"}]}/>
    </>
  )
}

export default Web