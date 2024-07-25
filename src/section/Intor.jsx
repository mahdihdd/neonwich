import NavBar from "../components/NavBar";
import NewSlider from "../components/NewSlider";
import Slides from "../components/Slides";

export default function Intor() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      {/* <NewSlider /> */}
      <Slides />
    </div>
  );
}
