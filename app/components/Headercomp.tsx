import Link from 'next/link';

interface MinimenuProps {
    Title: string;
    URL: string;
    Side: string;
    Pro: string;
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

export { Minimenu };
