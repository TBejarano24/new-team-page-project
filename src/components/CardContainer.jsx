import { useEffect, useState } from "react";
import CardDesign from "./CardDesign";

export default function CardContainer() {
  const [screenSize, setScreenSize] = useState(parseInt(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(parseInt(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full mt-[10px] grid grid-cols-2 grid-rows-[160px_160px_160px] gap-x-6 md:grid-cols-3 md:grid-rows-[220px_220px]">
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo1.png"}
        name={"Bill Mahoney"}
        role={"PRODUCT OWNER"}
        offset={false}
      />
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo2.png"}
        name={"Saba Cabrera"}
        role={"ART DIRECTOR"}
        offset={true}
      />
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo3.png"}
        name={"Shae Le"}
        role={"TECH HEAD"}
        offset={false}
      />
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo4.png"}
        name={"Skylah Lu"}
        role={"UX DESIGNER"}
        offset={screenSize < 768 ? true : false}
      />
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo5.png"}
        name={"Griff Richards"}
        role={"DEVELOPER"}
        offset={screenSize < 768 ? false : true}
      />
      <CardDesign
        photo={"/new_team_page_project/recursos/images/photo6.png"}
        name={"Stan John"}
        role={"DEVELOPER"}
        offset={screenSize < 768 ? true : false}
      />
    </div>
  );
}
