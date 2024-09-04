import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <div className="max-container">
      <div className="flex gap-20 max-lg:flex-col">
        <div>
          <img src={footerLogo} alt="footer logo" width={120} />
          <p className="my-5 max-w-sm font-montserrat text-base leading-7 text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <img
                key={social.src}
                src={social.src}
                alt={social.alt}
                width={40}
                height={40}
                className="cursor-pointer rounded-full bg-white p-2"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-10">
          {footerLinks.map((link) => (
            <div key={link.title} className="min-w-36 flex-1">
              <h4 className="mb-4 font-palanquin text-xl font-semibold text-white">
                {link.title}
              </h4>
              <ul className="flex flex-col gap-2.5 font-montserrat text-white-400">
                {link.links.map((li) => (
                  <li
                    key={li.name}
                    className="cursor-pointer transition-all hover:text-slate-gray"
                  >
                    {li.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex items-center justify-between text-white max-md:flex-col max-md:gap-2 max-sm:text-xs">
        <p className="flex items-center flex-wrap gap-2 justify-center">
          <img src={copyrightSign} alt="copyRight Sign" className=" max-sm:w-[16px]"/> Copyright 2024 by{" "}
          <a
            href="https://www.linkedin.com/in/dev-ahmedfares/"
            className="font-palanquin font-bold text-coral-red "
          >
            Ahmed Fares.
          </a>
           All rights reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
