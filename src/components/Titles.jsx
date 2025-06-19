export default function Titles() {
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="md:flex md:w-full md:mt-[20px] md:relative">
      <div className="flex mt-[50px] justify-between w-[190px]">
        <h1 className="font-bold text-[18px] self-end md:self-start dark:text-[#d1d5db]">
          The creative crew
        </h1>
        <div className="h-[40px] md:absolute md:right-[10%] md:top-[3%] md:h-[26px]">
          <button onClick={handleClick} className="hover:cursor-pointer">
            <img
              className="block dark:hidden"
              src="/moon.svg"
              alt="moon icon"
              width={"26px"}
            />
            <img
              className="hidden dark:block"
              src="/brightness-high.svg"
              alt="moon icon"
              width={"26px"}
            />
          </button>
        </div>
      </div>
      <div className="max-w-[160px] mx-auto mt-[16px] md:mr-0">
        <h2 className="text-[10px] font-bold dark:text-[#d1d5db]">
          Who we are
        </h2>
        <p className="text-[8px] font-semibold dark:text-[#d1d5db]">
          We are team of creatively diverse. driven. innovative individuals
          working in various locations from the world
        </p>
      </div>
    </div>
  );
}
