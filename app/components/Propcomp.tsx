import Link from 'next/link';

interface MinimenuProps {
    Title: string;
    URL: string;
    Side: string;
    Pro: string;
    key: string
}

const Minimenu: React.FC<MinimenuProps> = ({ Title, URL, Side, Pro }) => {
    return (
        <>
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
                <div>
                    <span className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underlinep text-base">{<Link href={URL}>{Title}</Link>} . {Side}</span>
                </div>
                <div>
                    <Link href={Pro}><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg" alt="" /></Link>
                </div>
            </div>
        </>
    );
};

interface BlogProps {
    key: string;
    Title: string;
    URL: string;
    Date: string;
    Description: string;
}

const Blogcard: React.FC<BlogProps> = ({Title, URL, Description, Date}) => {
    return (
        <>
        <div className="rounded-md p-3 h-full rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 ">
        <Minimenu 
                key="FASCIA"
                Title="Projects"
                URL="/projects"
                Pro="https://ihh-player.vercel.app"
                Side="IHH Player"
            />
        <div className='flex flex-col h-4/5 content-end justify-end mt-10'>    
        <h2 className='text-xl fblog'>{Title}</h2>
        <h3 className='text-sm m-0.5 fiblog'>{Date}</h3>
        <p className="description fiiblog">{Description}</p>
        </div>
        </div>
        </>
    )
}


export { Minimenu, Blogcard };
