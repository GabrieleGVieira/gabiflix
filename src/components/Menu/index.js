import React from "react";
import Logo from "../../assets/img/logo.png"
import ButtonLink from "../ButtonLink";
import "./Menu.css"


function Menu() {
    return (
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="GABIFLIX" />
        </a>
        <ButtonLink className="ButtonLink" href="/">
          Novo Video
        </ButtonLink>
      </nav>
    );
}

export default Menu;