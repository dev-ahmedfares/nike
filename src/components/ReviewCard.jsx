import { star } from "../assets/icons";

function ReviewCard({ imgURL, rating, customerName, feedback }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="h-[120px] w-[120px] overflow-hidden rounded-full">
        <img src={imgURL} alt={customerName} className="object-cover" />
      </div>
      <p className="info-text my-5 max-w-sm">{feedback}</p>
      <p className="flex items-center justify-center gap-3 mb-5">
        <img src={star} alt="star" />
        <span className="font-montserrat text-slate-gray text-lg">({rating})</span>
      </p>
      <h3 className="font-palanquin text-2xl font-bold">{customerName}</h3>
    </div>
  );
}

export default ReviewCard;
