interface MenuProps {
    Title: string;
}

const Menuhead: React.FC<MenuProps> = ({ Title }) => {
    return (
        <>
            <div className="boxdle">
                <Menuitems 
                Title= {Title}
                />
            </div>
        </>
    );
};

const Menuitems: React.FC<MenuProps> = ({ Title }) => {
    const name = ["Sushil", "Work", "Project", "Contact"];

    function List(item: String){
        if(item==Title){
        return (
            <>
            <div className="menuopt">
                <center><p className="smit">{item}</p></center>
            </div>
            </>
        )
        }
        else{
            return (
                <>
                <div className="menuopt">
                    <center><p className="mit">{item}</p></center>
                </div>
                </>
            )
        }
    }
    return(
        <>
        <div className="boxdle menubox">
            {name.map(List)}
        </div>
        </>
    )
}

export default Menuhead;