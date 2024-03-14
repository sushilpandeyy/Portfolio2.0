import { Resume, Twitter } from "./Components";
import { Minimenu } from "./Headercomp"
import Image from 'next/image';
import { Description, IhhComp } from "./Components";



export default function About(){
    return (<>
    <div className="flex flex-nowrap content-start justify-between m-5 ">
    <div className="s1">
    <Description/>
    </div>
    <div className="s2">
    <IhhComp/>
    <Twitter/>
    </div>
    </div>
    </>)
}