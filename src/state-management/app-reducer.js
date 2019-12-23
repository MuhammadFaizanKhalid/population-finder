import {
    SET_LOADING,

    SET_CITY_SEARCH,
    SET_COUNTRY_SEARCH,
    SET_SEARCH_LIST,
    
    SET_SELECTED_COUNTRY,
    SET_CITIES_LIST,

    SET_RESULT_OBJECT
} from './app-actions';

const inititalState = {
    is_loading              : false,
    citiesList              : {},
    searchList              : {},
    result                  : {}, 
    selectedCountry         : {},
    citySearch              : "",
    countrySearch           : "",
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
        case SET_SEARCH_LIST: {
            state = {
                ...state,
                searchList: action.payload,
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
        case SET_RESULT_OBJECT: {
            state = {
                ...state,
                result: action.payload
            }
            break;
        }
        case SET_SELECTED_COUNTRY: {
            state = {
                ...state,
                selectedCountry: action.payload
            }
            break;
        }
        default: {
            break;
        }
    }
    return state;
};
  
 export default AppReducer;