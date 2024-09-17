/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */

import FavoriteButton from "../FavoriteComponent/favorite";
import styled from "./movies.module.css";
/* eslint-disable prettier/prettier */
export default function MoviesComponent(props): JSX.Element {
  return (
    <div className={styled.movies_container}>
      <h2>Movies</h2>
      <div className="flexcards">
        {["Cards", 2].map((item) => {
          return (
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Imagen del Favorito"
              />
              <div className="card-content">
                <h3>Título del Favorito</h3>
                <p>
                  Descripción breve del elemento que estás destacando como
                  favorito. Aquí puedes añadir detalles interesantes.
                </p>
              </div>
              <FavoriteButton setShow={props.setShow} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
