
// ACTIONS
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_cOUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

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
    };
}
