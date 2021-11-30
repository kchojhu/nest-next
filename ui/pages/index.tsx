import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default Home;
