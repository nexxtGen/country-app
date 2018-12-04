import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import Pagination from '../presentational/pagination.component';
import { getCountries, searchCountries, deleteCountry, handleClickPage, handleNextPage, handlePrevPage, setCountriesPerPage } from '../actions/actions-countries';

//Dispatch actions to props
const mapDispatchToProps = dispatch => ({    
    getCountries: () => dispatch(getCountries()),
    searchCountries: (event) => dispatch(searchCountries(event)),
    deleteCountry: (id) => dispatch(deleteCountry(id)),
    handleClickPage: (event) => dispatch(handleClickPage(event)),
    handleNextPage: () => dispatch(handleNextPage()),
    handlePrevPage: () => dispatch(handlePrevPage()),
    setCountriesPerPage: (countriesPerPage) => dispatch(setCountriesPerPage(countriesPerPage)),

  });

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        //Binding methods
        this.search = this.search.bind(this);
        this.setCountriesPerPage = this.setCountriesPerPage.bind(this);
        this.handleClickPage = this.handleClickPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.deleteCountry = this.deleteCountry.bind(this);
    }

    componentDidMount(){
        this.props.getCountries();
        this.props.searchCountries('');
    }

    search(event) {
        this.props.searchCountries(event.target.value);
    }

    deleteCountry(id) {
        this.props.deleteCountry(id);
    }
    // Pagination
    // choose page with countries    
    handleClickPage(event) {
        this.props.handleClickPage(event.target.id);
        console.log('event id', event.target.id)
    }
    
    handleNextPage() {
        this.props.handleNextPage();        
    }

    handlePrevPage() {
        this.props.handlePrevPage();        
    }
    // set number countries per page
    setCountriesPerPage(countriesPerPage) {
        this.props.setCountriesPerPage(countriesPerPage);
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
                <h5>CUrrent Page {this.props.currentPage}</h5>
                <Pagination 
                    setCountriesPerPage={this.setCountriesPerPage.bind(this)}
                    pageNumbers={pageNumbers} 
                    handleClick={this.handleClickPage} 
                    handleNextPage={this.handleNextPage} 
                    handlePrevPage={this.handlePrevPage}
                    currentPage={this.props.currentPage}
                />
                <div className="search text-center">
                    <input type="text" onChange={this.search}/>
                </div>
                <CountryFlagList countries={currentCountries} deleteCountry={this.deleteCountry}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer);