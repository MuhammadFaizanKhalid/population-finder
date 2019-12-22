import axios from 'axios';

const API_URL = "http://api.geonames.org";
const API_USERNAME = "weknowit";
const API_DATATYPE = "json";

export const SET_LOADING = "SET_LOADING";
export const SET_CITIES_LIST = "SET_CITIES_LIST";
export const SET_CITIES_SEARCH_LIST = "SET_CITIES_SEARCH_LIST";
export const SET_COUNTRIES_SEARCH_LIST = "SET_COUNTRIES_SEARCH_LIST";
export const SET_CITY_SEARCH = "SET_CITY_SEARCH";
export const SET_COUNTRY_SEARCH = "SET_COUNTRY_SEARCH";

const payload = (t, p) => ({type: t, payload: p});

export const setLoading = (p) => (payload(SET_LOADING, p));
export const setCitiesList = (p) => (payload(SET_CITIES_LIST, p));
export const setCitiesSearchList = (p) => (payload(SET_CITIES_SEARCH_LIST, p));
export const setCountriesSearchList = (p) => (payload(SET_COUNTRIES_SEARCH_LIST, p));
export const setCitySearch = (p) => (payload(SET_CITY_SEARCH, p));
export const setCountrySearch = (p) => (payload(SET_COUNTRY_SEARCH, p));

const generateEndPoint = (endPoint) => (API_URL + endPoint);
const withBaseParams = (params) => ({...params, username: API_USERNAME, type: API_DATATYPE});

export function getCitiesByName(data) {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(generateEndPoint('/search'), {
            params: withBaseParams({
                name_equals: data.search,
                orderby: "population"
            })
        })
        .then(response => {
            if(response.data && response.data.geonames) {
                dispatch(setCitiesSearchList(response.data.geonames));
            }
            dispatch(setLoading(false));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function getCitiesByCountryCode(data) {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get('/Area/get', {
            params: data,
        }).then(response => {
            dispatch(setCitiesList(response.data));
            dispatch(setLoading(false));
        }).catch(error => {
            console.log(error);
        });
    };
}  