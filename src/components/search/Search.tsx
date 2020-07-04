import React, { Component } from "react";
import { connect } from "react-redux";
import { searchFilms } from "../../store/actions/searchFilms";
import { TypeSearch } from "../../common/enum/enum";

type TSearchState = { value: any}
type TSearchProps = {
    searchBy: TypeSearch,
    searchFilms: (value: string, searchBy: TypeSearch) => void
}

class Search extends Component<TSearchProps, TSearchState> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({ value: value.trim() });
    }

    handleSubmit(event) {
        event.preventDefault();
        let { value } = this.state;
        value = value.replace(/[^0-9|a-zA-Z|а-яА-Я]/gi, '').trim()
        value && this.props.searchFilms(value, this.props.searchBy);
    }

    render() {
        return (
            <div className="search">
                <form className="form-group" action="">
                    <input
                        data-search="searchFilms"
                        type="text"
                        className="form-control search__input"
                        placeholder="Search"
                        value={ this.state.value }
                        onChange={ this.handleChange }
                    />
                    <button
                        data-search="searchFilmsSubmit"
                        type="submit"
                        className="btn btn-lg search__btn"
                        onClick={ () => {
                            this.handleSubmit(event);
                        }}
                    >Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        searchBy: state.searchCriteria,
    });

const mapDispatchToProps = dispatch => ({
    searchFilms: (searchText, searchType) => dispatch(searchFilms(searchText, searchType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
