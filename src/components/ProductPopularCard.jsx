import { star } from "../assets/icons";

function ProductPopularCard({ imgURL, price, name }) {
  return (
    <div className="max-sm:mx-auto ">
      <img src={imgURL} alt={name} className="object-cover w-full" />
      <div>
        <p className="mt-3 flex items-center gap-2">
          <img
            src={star}
            alt={star}
            width={20}
            height={20}
            className="object-cover"
          />
          <span className="font-montserrat text-slate-gray">(4.5)</span>
        </p>
        <h3 className="font-semibold font-palanquin text-xl mt-2">{name}</h3>
        <span className="text-coral-red font-bold mt-1 block">{price}</span>
      </div>
    </div>
  );
}

export default ProductPopularCard;
