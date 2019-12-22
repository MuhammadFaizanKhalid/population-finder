import {
    SET_CITIES_LIST,
    SET_CITIES_SEARCH_LIST,
    SET_COUNTRIES_SEARCH_LIST,
    SET_CITY_SEARCH,
    SET_COUNTRY_SEARCH,
    SET_LOADING,
} from './app-actions';

const inititalState = {
    is_loading          : false,
    citiesList          : {},
    citySearchList      : {},
    countrySearchList   : {}, 
    citySearch          : "",
    countrySearch       : "",
};
  
const AppReducer = (state = inititalState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            state = {
                ...state,
                is_loading: action.payload,
            };
            break;
        }
        case SET_CITIES_LIST: {
            state = {
                ...state,
                citiesList: action.payload,
            };
            break;
        }
        case SET_CITIES_SEARCH_LIST: {
            state = {
                ...state,
                citySearchList: action.payload,
            };
            break;
        }
        case SET_COUNTRIES_SEARCH_LIST: {
            state = {
                ...state,
                countrySearchList: action.payload,
            };
            break;
        }
        case SET_CITY_SEARCH: {
            state = {
                ...state,
                citySearch: action.payload,
            };
            break;
        }
        case SET_COUNTRY_SEARCH: {
            state = {
                ...state,
                countrySearch: action.payload,
            };
            break;
        }
        default: {
            break;
        }
    }
    return state;
};
  
 export default AppReducer;