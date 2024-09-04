import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <div className="max-container items-center  flex flex-col gap-20 lg:flex-row" id="about-us">
      <div className="flex-1">
        <h2 className="text-clampSection mb-5 font-palanquin font-bold leading-tight lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="mb-5 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mb-10 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <Button label={"View details"} />
      </div>
      <div className="flex-1">
        <img src={shoe8} alt="shoe 8" className="mx-auto object-contain"/>
      </div>
    </div>
  );
}

export default SuperQuality;
