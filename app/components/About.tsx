import { Resume, Twitter } from "./Components";
import { Minimenu } from "./Propcomp"
import Image from 'next/image';
import { Description, IhhComp } from "./Components";



export default function About(){
    return (<>
    <div className="lg:flex flex-nowrap content-start justify-between lg:m-5 sm:flex-wrap sm:m-0">
    <div className="s1 lg:w-1/2	lg:text-2xl	">
    <Description/>
    </div>
    <div className="s2 lg:w-1/2">
    <IhhComp/>
    <div className="sm:block lg:flex content-start justify-between">
    <Resume/>
    <Twitter/>
    </div>
    </div>
    </div>
    </>)
}