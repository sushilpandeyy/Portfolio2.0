import { Minimenu } from "./Headercomp"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Varansi from "../../assets/Varansi.jpg"
 

function Twitter(){
    return (
    <div className="twitterbox rounded-md w-auto border border-zinc-50 p-4 m-2">
    <div className="content tweet flex flex-nowrap content-start justify-between">
        <div className="w-1/2">
            <div className="flex">
                <img src="https://pbs.twimg.com/profile_images/1666401418104934402/2YENIgPj_400x400.jpg" className="rounded-full h-12 w-12" />
                <div className="flex flex-col p-1">
                    <span className="text-sm">Sushil Pandey</span>
                    <span className="text-xs text-neutral-500">@contactsushill</span><br/>
                </div>
            </div>
        </div>
        <div className="w-1/2 flex justify-end content-center ">
            <img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/630d83f5a3b284176ffe8b1b_twitter-icon-min.png" className="rounded-full h-12 w-12 bg-sky-400" />
        </div>
    </div>
    <div className="content tweet text-base tweetfont">
        Just dove 🕊️ into TypeScript!
    </div>
    <div className="content tweet flex justify-center content-center">
        <a href="https://twitter.com/contactsushill"><div className="flex rounded-lg border p-1 m-2">Tweets <img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg" alt="" className="tweet" /></div></a>
    </div>
    <div className="overlay"></div>
</div>
    )
}

function Resume(){
    return(
        <div className="imgbox group h-full w-auto overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 flex-col">
            <div>
            <img src="https://res.cloudinary.com/djug8zfu7/image/upload/v1710359240/znusmcunhvfb5c1lgsx5.png"/>
            </div>
        </div>
    )
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

function Gallery() {
    const [hovered, setHovered] = useState<boolean>(false);
      
    return (
        <div className="relative bg-gray-200 h-1/6">
            <div className={`absolute top-0 left-0 w-full transition-transform duration-500 transform ${hovered ? '-translate-y-full' : 'translate-y-0'}`}>
                <p className="bg-gray-200 p-2 rounded-t-lg">Content above image</p>
            </div>
            <div className="relative h-5/6" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Image src={Varansi} alt="" className="rounded-md h-auto" />
            </div>
        </div>
    );
}

function IhhComp() {
    return (
        <div className="group w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 flex-col">
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

export {Twitter, Resume, Gallery, Description, IhhComp}