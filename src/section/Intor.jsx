import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Slides from "../components/Slides";

export default function Intor() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Slides />
      {/* <Slider /> */}
    </div>
  );
}
