import Aboutimg from '../assets/about.png'


function About(){
    return (
      <section className=" about-section">
        <div className="w-1/2 about-img">
          <img src={Aboutimg} />
        </div>
        <div className="w-1/2 about-con">
          <h1 className="font-bold  border-b-4 w-[100px] border-[#2b2d77]">
            About
          </h1>

          <p className="text-3xl">some information about nalin</p>
        </div>
      </section>
    );
} export default About;