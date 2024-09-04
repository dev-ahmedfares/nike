import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

function CustomerReviews() {
  return (
    <div className="max-container  text-center">
      <h2 className="mb-5 font-palanquin text-clampSection font-bold leading-tight  ">
        What Our<span className="text-coral-red"> Customers</span> Say?
      </h2>
      <p className="info-text mb-20 max-w-lg mx-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-col items-center justify-center gap-14 lg:flex-row">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
