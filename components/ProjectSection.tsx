import { useState } from "react";
import { projects } from "../data";
import Project from "./Project";
import { motion } from "framer-motion";
import variants from "../styles/animation";

const ProjectSection = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);

  
  return (
    <div style={{ marginTop: "-1rem" }}>
      <div
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={variants.fadeInUpmost}
            initial="initial"
            animate="animate"
            key={project.id}
            className="col-span-12 p-2 md:col-span-6 xl:col-span-4"
          >
            <Project data={project} showDetail={showDetail} setShowDetail={setShowDetail} id={project.id}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
