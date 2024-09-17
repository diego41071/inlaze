/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/naming-convention
"use client";

import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/naming-convention
import RootLayout from "./layout";
import HeaderComponent from "./Components/headerComponent/header";
import FavoriteButton from "./Components/FavoriteComponent/favorite";
import {
  IoArrowBackCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";
import CoverComponent from "./Components/CoverComponent/cover";
import MoviesComponent from "./Components/MovieComponent/movies";
import SignUpComponent from "./Components/SignUpComponent/signUp";

export default function Home(): JSX.Element {
  const [sign, setSign] = useState("register");
  const [register, setRegister] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <RootLayout>
      <HeaderComponent setShow={setShow} />
      <CoverComponent />
      {show && (
        <SignUpComponent
          setShow={setShow}
          setSign={setSign}
          sign={sign}
          register={register}
          setRegister={setRegister}
        />
      )}
      <MoviesComponent setShow={setShow} />
    </RootLayout>
  );
}
