import CardContainer from "./components/CardContainer";
import Titles from "./components/Titles";

export default function App() {
  return (
    <div className="flex justify-center h-screen dark:bg-[#111827]">
      <div className="flex flex-col justify-center items-center">
        <Titles />
        <CardContainer />
      </div>
    </div>
  );
}
