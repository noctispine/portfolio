import { AiFillCodepenSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div className="mt-10">
        <Image
          src="/images/me.jpg"
          alt="user avatar"
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <h3 className="my-8 text-3xl font-semibold tracking-wider text-white-button font-carme">
        <span>Eren </span>
        Çam
      </h3>
      <h3 className="px-2 py-1 mx-4 my-4 rounded-full text-opacity-90 text-white-button bg-gray-banner ">
       Web Developer
      </h3>

      {/* Links */}
      <div className="flex justify-around mx-auto my-10 sm:w-4/6 md:w-4/5">
        <a href="https://github.com/noctispine">
          <FaGithubSquare
            className="shadow-lg cursor-pointer w-14 h-14 opacity-85"
            color="#ff8f00"
            aria-label="GitHub"
          />
        </a>
        <a href="https://codepen.io/researcher-pine">
          <AiFillCodepenSquare
            className="shadow-lg cursor-pointer w-14 h-14 opacity-85"
            color="#ff8f00"
            aria-label="Codepen"
          />
        </a>
      </div>

      {/* address section */}
      <div className="py-4 my-10 bg-gray-banner bg-opacity-60">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" color="#F09666" />
          <span className="text-opacity-70 text-white-button">
            Istanbul, Turkey
          </span>
        </div>
        <div className="flex items-center justify-center mt-6 mb-2">
          <p className="text-white-button text-opacity-90">
            erencam.dev@gmail.com
          </p>
        </div>
        <button
          onClick={() => window.open("mailto:erencam.dev@gmail.com")}
          className="w-8/12 py-2 my-2 tracking-wide bg-opacity-75 rounded-full shadow-lg bg-yellow-button text-white-button textShadow"
        >
          Email Me
        </button>
        <style jsx>
          {`
            .textShadow {
              text-shadow: 1px 1px 1px #fefdfd;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Sidebar;
