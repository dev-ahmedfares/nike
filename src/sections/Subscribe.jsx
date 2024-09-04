import Button from "../components/Button";

function Subscribe() {
  return (
    <div className="max-container flex justify-between items-center max-xl:flex-col" id="contact-us">
      <h2 className="max-xl:text-center mb-14 font-palanquin text-clampSection xl:max-w-lg font-bold leading-tight">
        Sign Up for<span className="text-coral-red"> Updates </span> &
        Newsletter
      </h2>

      <form className="relative xl:max-w-[45%] max-w-2xl xl:flex-1 w-full h-16 sm:h-20 flex p-2.5 items-center overflow-hidden rounded-full border border-slate-gray bg-red-50">
        <input
          className="absolute inset-0 sm:pl-8 pl-5 outline-none"
          type="text"
          placeholder="subscribe@nike.com"
        />

        <div className="absolute right-2 w-fit">
          <Button label={"Sign Up"}></Button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
