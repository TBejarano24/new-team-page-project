export default function CardDesign({ offset, name, photo, role }) {
  return (
    <div className={`relative ${offset ? "place-self-end" : ""}`}>
      <div className="flex">
        <img className="w-[80px] md:w-[120px]" src={photo} alt="foto" />
        <p className="text-[6px] h-[10px] w-[80px] absolute top-[36px] left-[42px] rotate-90 md:left-[83px] dark:text-[#d1d5db]">
          {role}
        </p>
      </div>
      <p className="font-bold text-[8px] md:text-[10px] dark:text-[#d1d5db]">
        {name}
      </p>
    </div>
  );
}
