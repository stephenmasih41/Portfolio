import logo from "../assets/Mylogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/stephen-masih-47895321b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/stephenmasih41" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/stephen_masih_/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
