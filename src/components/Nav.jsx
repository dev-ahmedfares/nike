import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Sidebar from "./sidebar";

function Nav() {
  const [showSide, setShowSide] = useState(false);

  function handleClose(e) {
    e.stopPropagation();
    setShowSide((curr) => !curr);
  }
  
  return (
    <header className="padding-x absolute  w-full py-8 z-50">
      <nav className="max-container flex items-center justify-between ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat text-lg leading-normal text-slate-gray hover:text-coral-red transition-all "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-2 font-montserrat text-lg font-medium leading-normal max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="lg:hidden relative z-50" onClick={handleClose}>
          <img src={hamburger} alt="hamburger" width={25} height={25} className="cursor-pointer"/>
          {showSide && <Sidebar setShowSide={setShowSide} />}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
