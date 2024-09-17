/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */

import { FaRegUserCircle } from "react-icons/fa";

export default function HeaderComponent(props): JSX.Element {
  return (
    <header className="header">
      <div className="logo">
        <img src="./icono.png" alt="Logo de la Página" />
      </div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Películas</a>
      </nav>
      <div className="search-bar">
        <FaRegUserCircle
          onClick={(e) => {
            props.setShow(true);
          }}
        />
      </div>
    </header>
  );
}
