import React from "react";

const SearchBox = function({searchChange})
{

    
    return(
        <div className="searchBox">
            <input type={'search'} placeholder ={'enter an name to serch'}  onChange = {searchChange} />
           
        </div>
    );
}
export default SearchBox;