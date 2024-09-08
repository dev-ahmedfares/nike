import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div
      id="home"
      className="max-container flex flex-col justify-center xl:gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex max-sm:min-h-screen lg:min-h-screen w-full flex-col items-start justify-center pt-28 pt-32 xl:w-2/5 xl:pt-44">
        <p className="font-montserrat text-xl text-coral-red max-sm:text-lg">
          Our Summer collections
        </p>
        <h1 className="text-clamp mt-10 font-palanquin font-bold xl:leading-[120px]">
          <span className="relative z-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>{" "}
          <br />{" "}
          <span className="inline-block text-coral-red">Nike</span>{" "}
          Shoes
        </h1>
        <p className="mb-16 mt-6 font-montserrat text-xl leading-8 text-slate-gray max-md:text-base max-sm:mb-10 max-sm:leading-7 
         sm:w-4/5 md:w-3/5">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" imgSrc={arrowRight} />
        <ul className="m-auto mt-14 max-xl:mb-14 flex items-center justify-center gap-20 text-center font-palanquin max-sm:gap-10">
          {statistics.map((li) => (
            <li key={li.label}>
              <p className="text-4xl font-bold max-sm:text-3xl">{li.value}</p>
              <span className="text-lg text-slate-gray">{li.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="big shoes"
          width={610}
          height={502}
          className="relative z-10 object-contain"
        />

        <div className="absolute -bottom-[5%] flex justify-center gap-5 lg:gap-10">
          {shoes.map((img) => (
            <ShoeCard
              key={img.thumbnail}
              img={img}
              bigShoeImg={bigShoeImg}
              setBigShoeImg={setBigShoeImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
