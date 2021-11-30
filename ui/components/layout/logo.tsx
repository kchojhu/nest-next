import type { NextPage } from "next";
import Image from "next/image";
import classes from "./logo.module.css";

const Logo: NextPage = () => {
  return (
    <div className={classes.logo}>Max Blog</div>
  );
};

export default Logo;
