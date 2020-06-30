import React, { Component } from "react";
import { connect } from "react-redux";
import { searchFilms } from "../../store/actions/searchFilms";

type MyState = { value: any}
type MyProps = { searchBy: any, searchFilms: any }

class Search extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchFilms(this.state.value, this.props.searchBy);
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

const mapStateToProps = (state) => {
    return {
        searchBy: state.searchCriteria,
    };
}

export default connect(mapStateToProps, { searchFilms })(Search);
