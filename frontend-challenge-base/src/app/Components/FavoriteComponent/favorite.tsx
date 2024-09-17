/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FavoriteButton(props): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    props.setShow(true);
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {isFavorite ? (
        <FaHeart style={{ color: "white", fontSize: "24px" }} />
      ) : (
        <FaRegHeart style={{ color: "gray", fontSize: "24px" }} />
      )}
    </button>
  );
}
