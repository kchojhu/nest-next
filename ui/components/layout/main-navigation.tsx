import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation: NextPage = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
