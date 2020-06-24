import React from "react";

const Search = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Кликнули кнопке поиска.');
    }

    return (
        <div className="search">
            <form className="form-group" action="" id="formSearchFilms">
                <input type="text" className="form-control search__input" placeholder="Search"/>
                <button type="submit" className="btn btn-lg search__btn" onClick={handleClick} >Search</button>
            </form>
        </div>
    )
}

export default Search;
