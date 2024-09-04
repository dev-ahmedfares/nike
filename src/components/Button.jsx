function Button({ label, imgSrc }) {
  return (
    <button
      className={`before:g-gradient-to-br <before:translate-y-5 relative flex items-center gap-3 rounded-full border border-coral-red bg-gradient-to-br from-coral-red active:shadow-lg active:scale-95 transition-all  via-coral-red/60 to-red-300 px-7 py-4 font-montserrat text-lg text-white before:absolute before:inset-0 before:h-full before:w-full before:translate-x-3 before:from-coral-red before:via-coral-red/60 before:to-red-300 before:blur-lg max-sm:px-5 max-sm:py-3 max-sm:text-base`}
    >
      {label}{" "}
      {imgSrc && (
        <span>
          <img src={imgSrc} alt="arrow right" width={20} height={20} />
        </span>
      )}
    </button>
  );
}

export default Button;
