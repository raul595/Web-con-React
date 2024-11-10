import React from 'react'
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { RxBackpack } from "react-icons/rx";
function Nav() {
  return (
    <nav>
        <Link>Inicio</Link> <IoHome /> - 
        <Link>Noticias</Link> <FaRegNewspaper />  - 
        <Link> Oferta Educativa - </Link> <RxBackpack />
    </nav>
  )
}

export default Nav