'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-0`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About GoshenDAO" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 1, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Goshen DAO</span> is  is a dynamic community dedicated to fostering collaboration, creativity, and innovation in the decentralized world. Whether you're an artist, developer, entrepreneur, or blockchain enthusiast, you've found your digital home!
      </motion.p>
    </motion.div>
  </section>
);

export default About;
