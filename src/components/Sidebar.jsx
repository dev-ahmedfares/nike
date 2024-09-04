import { navLinks } from "../constants";

import { useOutsideClick } from "./useOutsideClick";

function Sidebar({setShowSide}) {
  const ref =useOutsideClick(setShowSide)

  return (
    <div className="absolute min-w-32 py-2 right-0 top-[120%] h-fit w-fit max-w-lg border border-coral-red/5 shadow-coral-red/20 shadow-lg rounded-xl bg-white " ref={ref}>
      <ul className="flex w-full flex-col min-w-lg ">
        {navLinks.map((link) => (
          <li key={link.label} className="w-full">
            <a
              href={link.href}
              className="block px-4 py-1  font-montserrat text-md leading-normal text-slate-gray transition-all  hover:text-coral-red"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
