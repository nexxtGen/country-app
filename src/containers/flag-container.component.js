import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import Pagination from '../presentational/pagination.component';
import { getCountries, searchCountries, deleteCountry, handleClickPage } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        //this.handleClickPage = this.handleClickPage.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    // Pagination
    handleClickPage(event) {
        this.props.dispatch(handleClickPage(event.target.id));
        console.log('event id', event.target.id)
    }
    render() {
        //Add pagination
        //const { this.props.visibleCountries, this.props.currentPage, this.props.countriesPerPage } = this.state;

        // Logic for display current countries
        const indexOfLastCountry = this.props.currentPage * this.props.countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - this.props.countriesPerPage;
        const currentCountries = this.props.visibleCountries.slice(indexOfFirstCountry, indexOfLastCountry);
        // Logic for displaying page numbers

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.visibleCountries.length / this.props.countriesPerPage); i++) {
          pageNumbers.push(i);
        }
        return (
            <div>
                <h5>Countries list pages number: {pageNumbers.length}</h5>
                <h5>All countries in App: {this.props.countries.length}</h5>
                <h5>Select Page</h5>
                <Pagination pageNumbers={pageNumbers} handleClick={this.handleClickPage.bind(this)}/>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={currentCountries} deleteCountry={this.deleteCountry.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        //Add Pagination
        currentPage: store.countriesReducer.currentPage,
        countriesPerPage: store.countriesReducer.countriesPerPage
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);