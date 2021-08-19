import { AboutInterface } from "../type";
import { motion } from "framer-motion";
import variants from "../styles/animation";
import { FunctionComponent } from "react";

const Card: FunctionComponent<{ about: AboutInterface; key: number }> = ({
  about: { Icon, title, body },
}) => {
  return (
    <motion.div
      variants={variants.fadeInUp}
      initial="initial"
      animate="animate"
      className="my-5"
    >
      <div className="flex justify-center my-5 flex-column">
        <Icon className="w-12 h-12 mr-5" color="#b2ff59" opacity="0.8" />
        <div className="flex flex-col">
          <h2 className="font-bold text-left text-opacity-90 text-white-button">
            {title}
          </h2>
          <p className="mt-2 text-left w-52 lg:w-72 text-white-button text-opacity-70">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
