import { programmingSkills, webSkills, otherSkills } from "../data";
import Skill from "./Skill";
import { FaKeyboard } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { motion } from "framer-motion";
import variants from "../styles/animation";

const Stack = () => {

  return (
    // Programming Skills
    <div className="grid grid-cols-3 mb-3">
      <div className="col-span-3 xl:col-span-1">
        <motion.div
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center"
        >
          <FaKeyboard
            className="block w-12 h-12 mt-5 mb-2"
            color="#FEFDFD"
            opacity="0.8"
          />
          <div className="w-32 mt-5 border-2 border-white-button border-opacity-80"></div>
        </motion.div>
        {programmingSkills.map((skill, index) => (
          <Skill data={skill} key={index} />
        ))}
      </div>
      {/* Web Skills */}
      <div className="col-span-3 xl:col-span-1">
        <motion.div
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center"
        >
          <SiHtml5
            className="block w-12 h-12 mt-5 mb-2"
            color="#FEFDFD"
            opacity="0.8"
          />
          <div className="w-32 mt-5 border-2 border-white-button border-opacity-80"></div>
        </motion.div>

          {webSkills.map((skill, index) => (
            <Skill data={skill} key={index} />
          ))}
    
      </div>
      {/* Other Skills */}
      <div className="col-span-3 xl:col-span-1">
        <motion.div
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center"
        >
          <IoHardwareChip
            className="block w-12 h-12 mt-5 mb-2 "
            color="#FEFDFD"
            opacity="0.8"
          />
          <div className="w-32 mt-5 border-2 border-white-button border-opacity-80"></div>
        </motion.div>
        {otherSkills.map((skill, index) => (
          <Skill data={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Stack;