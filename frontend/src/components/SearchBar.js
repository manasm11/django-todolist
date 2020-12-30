export default function SearchBar({onClick}){
    return (
        <>
            <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={onClick}>Search</button>
            </div>
        </>
    )
}