import { SkillInterface } from "../type";
import { motion } from "framer-motion";
import variants from "../styles/animation";
import { FunctionComponent } from "react";

const Skill: FunctionComponent<{ data: SkillInterface }> = ({
  data: { name, Icon },
}) => {
  return (
    <>
      <motion.div
        variants={variants.fadeInUpper}
        initial="initial"
        animate="animate"
        className="flex items-center p-5 mx-5 my-3 bg-gray-banner bg-opacity-60"
      >
        <Icon className="w-8 h-8" color="#b2ff59" opacity="0.8" />
        <span className="ml-5 text-white-button">{name}</span>
      </motion.div>
    </>
  );
};

export default Skill;
