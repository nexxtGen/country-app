
// ACTIONS
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';
export const HANDLE_CLICK_PAGE = 'HANDLE_CLICK_PAGE';

// ACTIONS CREATORS

//listing all countries
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}
//delete country
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    }
}
// get country - show country details
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}
//search Countries
export function searchCountries(searchText)  {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name

    }
}
// Pagination
export function handleClickPage(currentPage) {
    return {
        type: HANDLE_CLICK_PAGE,
        currentPage
    }
}