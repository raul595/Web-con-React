import React from 'react';
import './footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer({ RRSS }) {
  return (
    <footer>
      {RRSS.map((red, index) => {
        if (red.nombre === "Facebook") {
          return (
            <a key={index} href={red.url}>
              {red.nombre} <FaFacebook style={{ fontSize: 40 }} />
            </a>
          );
        } else if (red.nombre === "Instagram") {
          return (
            <a key={index} href={red.url}>
              {red.nombre} <FaInstagram style={{ fontSize: 40 }} />
            </a>
          );
        } else if (red.nombre === "LinkedIn") {
          return (
            <a key={index} href={red.url}>
              {red.nombre} <FaLinkedin style={{ fontSize: 40 }} />
            </a>
          );
        } else if (red.nombre === "Google") {
          return (
            <a key={index} href={red.url}>
              {red.nombre} <FaGoogle style={{ fontSize: 40 }} />
            </a>
          );
        } else {
          return (
            <a key={index} href={red.url}>
              {red.nombre} <FaLinkedin style={{ fontSize: 40 }} />
            </a>
          );
        }
      })}
      <a href="https://iescuravalera.es">
        IES Cura Valera <img src="/logo.png" width="50" alt="logoIES" />
      </a>
    </footer>
  );
}

export default Footer;
