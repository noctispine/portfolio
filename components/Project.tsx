import { AiFillProject } from "react-icons/ai";
import { ProjectInterface } from "../type";
import { MdClose } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import variants from "../styles/animation";
import { FunctionComponent } from "react";

const Project: FunctionComponent<{
  data: ProjectInterface;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
  id: number;
}> = ({
  data: { name, description, image_url, live_url, github_url, tags },
  showDetail,
  setShowDetail,
  id,
}) => {
  return (
    <div className="relative flex flex-col justify-center p-5 md:static rounded-2xl bg-gray-banner">
      <Image
        src={image_url}
        alt={name}
        className="my-auto cursor-pointer rounded-xl h-52 "
        onClick={() => setShowDetail(id)}
        width="300"
        height="200"
        layout="responsive"
        quality="50"
      />
      <p className="mt-4 text-lg text-center text-white-button text-opacity-80">
        {name}
      </p>

      {/* Detail Section */}
      {showDetail === id && (
        <motion.div
          variants={variants.fadeInUpper}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 z-10 grid w-full h-auto pb-5 rounded-xl text-white-button bg-gray-banner md:grid-cols-2 md:gap-x-5"
          style={{ marginTop: "-1rem" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="border-2 border-gray-100 mt-14 w-60 md:w-96 md:ml-7 md:mt-10 max-w-800px">
              <Image
                src={image_url}
                alt={name}
                height="100"
                width="150"
                layout="responsive"
              />
            </div>
            {/* Links */}
            <div className="flex space-x-10 my-9 ">
              <a
                href={github_url}
                className="flex items-center px-5 py-2 space-x-1 bg-opacity-100 bg-gray-card"
              >
                <FaGithubSquare className="w-8 h-8" color="#F09666" />
                <span>Github</span>{" "}
              </a>
              <a
                href={live_url}
                className="flex items-center px-5 py-2 space-x-1 bg-opacity-100 bg-gray-card"
              >
                <AiFillProject className="w-8 h-8" color="#F09666" />
                <span>Live</span>{" "}
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="mx-5 mt-2 mb-5 md:mt-10">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap justify-center mt-5 space-x-2 text-sm tracking-wider ">
              {tags.map((tag) => (
                <span
                  className="px-5 py-3 mt-2 text-lg font-medium bg-opacity-100 rounded-md bg-gray-card"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            className="absolute p-1 rounded-full top-3 right-3"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Project;
