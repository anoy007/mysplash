import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return <div className="form-control">
        <input
            type={"text"}
        ></input>
        <BsSearch size={15} style={{marginLeft: '4px', cursor:"pointer"}}/>
        {/* <button type="Submit">
            Search
        </button> */}
    </div>
}

export default Search;