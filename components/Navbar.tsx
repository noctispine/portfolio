import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import variants from "../styles/animation";

type NavItemProps = {
  content: string;
  setContent: Function;
  name: string;
  route: string;
};

const NavItem: FunctionComponent<NavItemProps> = ({
  content,
  setContent,
  name,
  route,
}) => {
  return (
    <>
      {content !== name ? (
        <Link href={route}>
          <a className='border-b-2 border-opacity-70 border-yellow-button'
            onClick={() => {
              setContent(name);
            }}
          >
            {name}
          </a>
        </Link>
      ) : null}
    </>
  );
};

const Navbar = () => {
  const [content, setContent] = useState<string>("about");

  const { pathname } = useRouter();

  useEffect(() => {
    pathname === "/"
      ? setContent("about")
      : pathname === "/projects"
      ? setContent("projects")
      : setContent("stack");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-5 bg-gray-banner bg-opacity-90 rounded-t-2xl">
      <span className="pr-5 text-2xl font-bold tracking-wider md:text-3xl text-opacity-90 text-white-button ">
        {content[0].toUpperCase() + content.slice(1)}
      </span>
      <div className="flex space-x-3 text-xl tracking-wide text-yellow-button md:text-2xl ">
        <NavItem
          content={content}
          setContent={setContent}
          name="about"
          route="/"
        />
        <NavItem
          content={content}
          setContent={setContent}
          name="projects"
          route="/projects"
        />
        <NavItem
          content={content}
          setContent={setContent}
          name="stack"
          route="/stack"
        />
      </div>
    </div>
  );
};

export default Navbar;
