import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <div className="max-container flex items-center justify-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <h2 className="mb-5 font-palanquin text-clampSection font-bold leading-tight lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="info-text mb-5">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mb-10">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
          <Button label={"Shop now"} imgSrc={arrowRight} />
        
      </div>
    </div>
  );
}

export default SpecialOffer;
