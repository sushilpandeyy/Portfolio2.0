"use client";
import About from "./components/About";
import { Gallery } from "./components/Components";
import Menuhead from "./components/Menuhead";


export default function Home() {
  //MENU
  //ABOUT SECTION
  //THREE SECTIONS ONE ABOUT GALLERY ONE ABOUT FASCIA ONE ABOUT BLOG
  return (
    <>
    <div className="m-10 mt-1">
    <Menuhead
    key="SUSHIL"
    Title="Sushil"
    />
    <div>
    <About/>
    </div>
    <div className="flex flex-row h-auto">
      <div className="basis-1/4 m-2"><Gallery/></div>
      <div className="basis-1/2">b</div>
      <div className="basis-1/4">c</div>
    </div>
    </div>
    </>
  );
}
