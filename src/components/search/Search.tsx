import React from "react";

const Search = () => (
    <div className="search">
        <form className="form-group" action="">
            <input type="text" className="form-control search__input" placeholder="Search"/>
            <button type="submit" className="btn btn-lg search__btn">Search</button>
        </form>
    </div>
)

export default Search;
