import { GET_COUNTRIES,
    GET_COUNTRY,
    SEARCH_COUNTRIES,
    DELETE_COUNTRY,
    SET_CONTINENT,
    HANDLE_CLICK_PAGE,
    HANDLE_NEXT_PAGE,
    HANDLE_PREV_PAGE,
    SET_COUNTRIES_PER_PAGE
 } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: [], //stan zawierający wyszukane kraje
    // Add pagination
    currentPage: 1,
    countriesPerPage: 3    
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
        case GET_COUNTRY:
            const selectedCountry= state.countries.find(country => country.id===parseInt(action.id));
            return Object.assign({}, state, {selectedCountry});
            case SEARCH_COUNTRIES:
                const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
                return Object.assign({}, state, {visibleCountries: foundCountries, currentPage: 1});
            case DELETE_COUNTRY:
                const notDeletedCountries = state.countries.filter(country => country.id != action.id);
                const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
                return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});
            case SET_CONTINENT:
                const continentCountries = state.countries.filter(country => country.continent === action.name);
                return Object.assign({}, state, {visibleCountries: continentCountries});
            //pagination    
            case HANDLE_CLICK_PAGE:
                const currentPage = Number(action.currentPage);
                console.log('Current page reducer', currentPage);
                return Object.assign({}, state, {currentPage});
            case HANDLE_NEXT_PAGE:
                const pageNumbers = Math.ceil(state.visibleCountries.length / state.countriesPerPage);
                console.log("PageNumbers in reducer:", pageNumbers)
                const nextPage = state.currentPage < pageNumbers ? state.currentPage + 1 : state.currentPage;
                return Object.assign({}, state, {currentPage: nextPage });
            case HANDLE_PREV_PAGE:
                const prevPage = state.currentPage > 1 ? state.currentPage -1 : state.currentPage;
                return Object.assign({}, state, {currentPage: prevPage });
            case SET_COUNTRIES_PER_PAGE:
                const countriesPerPage = Number(action.countriesPerPage);
                return Object.assign({}, state, { countriesPerPage: countriesPerPage, currentPage: 1 });
                
                
                

    }

    return state;
};

export default countriesReducer;