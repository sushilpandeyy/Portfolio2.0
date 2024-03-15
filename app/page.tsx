"use client";
import About from "./components/About";
import { Gallery, FasciaComp } from "./components/Components";
import Menuhead from "./components/Menuhead";
import { Blogcard } from "./components/Propcomp";
import { CardStack } from "./components/card-stack";

const sampleData: Array<{
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
}> = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    content: (
      <div>
        <p>This is John Doe's content.</p>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'UI/UX Designer',
    content: "HEY THERE",
  },
  // Add more sample data as needed
];

const ab = () => {
  return (
    <div className="cardstest">
      <CardStack
      items={sampleData}
      />
    </div>
  )
}

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
    <About/>
    <div className="lg:flex flex-row h-auto justify-items-center content-start">
      <div className="basis-1/4 m-1"><Gallery/></div>
      <div className="basis-1/2 m-1"><FasciaComp/></div>
      <div className="basis-1/4 m-1">
        <Blogcard 
        key="SOLANA"
        Title="Online Hackathon Experience"
        Date="July 24, 2023"
        Description="Experience at HackSRM 4.0, where we, a bunch of first-year enthusiasts, formed a team named ‘The Dictators.’ The 24-hour hackathon took place from 19th to 20th May 2023,"
        URL="https://Medium.com/@contactsushil"
        />
        </div>
    </div>
    </div>
    </>
  );
}
