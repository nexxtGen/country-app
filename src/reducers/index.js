import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';

// plik w którym scalam zdefiniowane reducery (choć jest tylko jeden to jest to dobra praktyka.)
const reducers = combineReducers({
    countriesReducer
});

export default reducers;