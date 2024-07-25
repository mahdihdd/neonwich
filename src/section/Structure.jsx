import React from "react";
import Description from "./Description";
import Intor from "./Intor";
import Product from "./Product";
import Order from "./Order";
import Questions from "./Questions";
import Footer from "./Footer";
import CallIcon from "../components/CallIcon";

export default function Structure() {
  return (
    <>
      <Intor />
      <Description />
      <Product />
      <Order />
      <Questions />
      <Footer />
      <CallIcon />
    </>
  );
}
