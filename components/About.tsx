import { about } from "../data";
import { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import variants from "../styles/animation";

const About = () => {
  const words = ["know", "am learning", "do"];
  const [wordIndex, setWordIndex] = useState<number>(0);

  // An infinite loop for changing words..
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndx) =>
        prevIndx !== words.length - 1 ? prevIndx + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.h3
        variants={variants.fadeIn}
        initial="initial"
        animate="animate"
        className="mt-5 ml-5 text-base tracking-wide text-left lg:text-xl sm:text-lg text-white-button text-opacity-80"
      >
        <span className="ml-5"></span>I am currently pursuing my third year
        Bachelor in Computer Engineering. Since the start of this marathon, I
        have tried numerous different fields to explore myself and currently,
        I'm trying to develop myself as a full-stack engineer.
      </motion.h3>
      <div className="mt-7 ">
        <h5 className="ml-5 overflow-hidden text-2xl tracking-wide text-left sm:text-3xl lg:text-4xl w-80 text-white-button text-opacity-80">
          What I{" "}
          <motion.span
            className="inline-block text-green-lime text-opacity-95"
            variants={variants.FadeInInfinitely}
            initial="initial"
            animate="animate"
          >
            {words[wordIndex]}
          </motion.span>
        </h5>
      </div>
      <section className="grid mt-5 xl:grid-cols-2 rounded-2xl bg-gray-banner">
        {about.map((item, index) => (
          <Card about={item} key={index} />
        ))}
      </section>
    </div>
  );
};

export default About;
