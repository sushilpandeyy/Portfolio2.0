import About from "./components/About";
import Menuhead from "./components/Menuhead";


export default function Home() {
  return (
    <>
    <Menuhead
    Title="Sushil"
    />
    <div className="m-10">
    <About/>
    </div>
    </>
  );
}
