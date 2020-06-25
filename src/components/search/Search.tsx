import React from "react";

const Search = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Кликнули кнопке поиска.');
    }

    return (
        <div className="search">
            <form className="form-group" action="">
                <input data-search="searchFilms" type="text" className="form-control search__input" placeholder="Search"/>
                <button data-search="searchFilmsSubmit" type="submit" className="btn btn-lg search__btn" onClick={handleClick} >Search</button>
            </form>
        </div>
    )
}

export default Search;
