import { Minimenu } from "./Headercomp"
import Image from 'next/image';

function IhhComp() {
    return (
        <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 flex-col">
            <Minimenu 
                Title="Projects"
                URL="/projects"
                Pro="https://ihh-player.vercel.app"
                Side="IHH Player"
            />
            <div className="boxdlee grow overflow-hidden transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 ">
                <img className="imageihh" src="https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png" alt="IHH Player"/>
            </div>
        </div>
    );
}

function Description(){
    return (
        <>
            <h1 className="aboutsh font-serif-variation font-serif text-2xl font-light !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">Hey there, I’m <span className="blackpp">Sushil</span>👋 Welcome to my corner of the internet 🥹 I have a knack for crafting digital <span className="blackpp">products</span> and currently contribute to the innovative team at <span className="blackpp">Filos</span>.<br/><br/>
            When I'm not delving into pixels and code, you'll often catch me diving into the vibrant rhythms of Indian hip hop, beats and lyrics.<br/><br/>
            I'm not a serious <span className="blackpp">writer</span>, but I enjoy dedicating my free time to putting my thoughts into words.</h1><br/><br/>
        
        </>
    )
}

export default function About(){
    return (<>
    <div className="boxdlee m-5">
    <div className="s1">
    <Description/>
    </div>
    <div className="s2">
    <IhhComp/>
    </div>
    </div>
    </>)
}