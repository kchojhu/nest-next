import type { NextPage } from "next";
import Image from 'next/image';
import classes from './hero.module.css';

const Hero: NextPage = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/max.png" alt="test" width={300} height={300}/>
        </div>
        <h1>
            Hi
        </h1>
        <p>Just a paragraph</p>
    </section>
  );
};

export default Hero;
