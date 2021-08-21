import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import "./Layout.scss";

export const Layout = (props) => (
  <>
      <Navbar />
      <div className="root">
          {props.children}
      </div>
      <Footer />
  </>
);