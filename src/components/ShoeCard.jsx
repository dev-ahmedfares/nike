function ShoeCard({ img, bigShoeImg, setBigShoeImg }) {
  function handleBigImg() {
    if (bigShoeImg !== img.bigShoe) {
      setBigShoeImg(img.bigShoe);
    }
  }
  return (
    <div
      className={`rounded-lg bg-card bg-cover hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-coral-red bg-center p-2 max-sm:w-[23%] ${img.bigShoe === bigShoeImg ? `ring-2 ring-coral-red` : ``}`}
    >
      <img src={img.thumbnail} alt={img.bigShoe} onClick={handleBigImg} />
    </div>
  );
}

export default ShoeCard;
