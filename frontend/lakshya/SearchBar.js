import { useRef } from 'react';
export default function SearchBar({ onClickAdd }) {
    const searchRef = useRef()
    return (
        <>
            <div className="form-inline my-2 my-lg-0">
                <input ref={searchRef} className="form-control mr-sm-2" type="search" placeholder="Add Task" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => onClickAdd(searchRef.current.value)}>Add</button>
            </div>
        </>
    )
}