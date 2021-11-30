import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";
import MainNavigation from "./main-navigation";

const Layout: NextPage = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
