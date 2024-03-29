interface WorkcardProps {
    Title: string;
    Subtitle: string;
}

const Workcard: React.FC<WorkcardProps> = ({ Title, Subtitle }) => {
    return (
        <>
            <div className="group h-80 w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 p-2">
                <div className="flex justify-between content-start">
                    <div className="s1">
                        <h1>{Title}</h1>
                        <h2>{Subtitle}</h2>
                    </div>
                    <div className="s2">
                        ARROW BUTTON
                    </div>
                </div>
            </div>
        </>
    );
};

export default Workcard