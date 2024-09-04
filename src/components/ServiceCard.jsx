function ServiceCard({ label, imgURL, subtext }) {
  return (
    <div className="w-full flex-1 rounded-[20px] p-10 shadow-2xl  sm:min-w-[350px]">
      <img
        src={imgURL}
        alt={label}
        className="rounded-full bg-coral-red p-2"
        width={40}
        height={40}
      />
      <h3 className="mt-5 font-palanquin font-bold text-xl">{label}</h3>
      <p className="text- mt-2 font-montserrat text-slate-gray text-lg leading-normal">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
