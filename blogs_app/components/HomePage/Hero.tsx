import Image from "next/image";

import styles from "./Hero.module.css"

const Hero = () => {
    return <section className={styles.hero}>
        <div className={styles.image}>
            <Image src="/images/site/Abdo.jpg" alt="Abdo" width={400} height={400} />
        </div>
        <h1>Hi, I&apos;m Abdo</h1>
        <p>
            A Full Stack developer who enjoys building software applications from both front-end and back-end perspectives
        </p>
    </section>
}

export default Hero;