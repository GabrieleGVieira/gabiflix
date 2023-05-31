import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/linkedin.png"
import "./Footer.css"

export default function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/gabrielevieira/">
        <img className="Logo" src={Logo} alt="Logo LinkedIn" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}


