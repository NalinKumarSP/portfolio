  import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
  function Header(){
    const [toggel,setTolggel] = useState(false);
    return (
      <div>
        <header className="flex justify-between px-5 head ">
          <a href="#" className="font-bold py-1.5">
            Nalin Kumar S P
          </a>
          <nav className="hidden md:block">
            <ul className="flex  text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contect</a>
              </li>
            </ul>
          </nav>
          { toggel && <nav className="block md:hidden mobile ">
            <ul className="flex flex-col text-white mobile-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contect</a>
              </li>
            </ul>
          </nav>}
          <button className="block md:hidden" onClick={() =>setTolggel(!toggel)}>
            <Bars3Icon className="text-white h-5" />
          </button>
        </header>
      </div>
    );
}
export default Header;