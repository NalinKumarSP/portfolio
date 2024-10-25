import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
function Home() {
  return (
    <section className="md:flex-row flex flex-col   color-home">
      <div className="md:w-1/2 flex flex-col">
        <h1>
          Hai,
          <br /> Im <span className="text-black">SP</span> Nalin Kumar
          <p className="text-3xl">Im a Student</p>
        </h1>
        <div className="flex icons">
          <a href="" className=" hover:text-white">
            <AiOutlineLinkedin size={45} />
          </a>
          <a href="" className=" hover:text-white">
            <AiOutlineGithub size={45} />
          </a>
          <a href="" className=" hover:text-white">
            <AiOutlineInstagram size={45} />
          </a>
          <a href="" className=" hover:text-white">
            <CgWebsite size={45} />
          </a>
        </div>
      </div>

      <img src={HeroImg} alt="hero" className="md:w-1/3" />
    </section>
  );
}
export default Home;
