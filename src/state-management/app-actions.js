import axios from 'axios';

const API_URL = "http://api.geonames.org";
const API_USERNAME = "weknowit";
const API_DATATYPE = "json";

export const SET_LOADING = "SET_LOADING";

export const SET_CITY_SEARCH = "SET_CITY_SEARCH";
export const SET_COUNTRY_SEARCH = "SET_COUNTRY_SEARCH";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";

export const SET_SELECTED_COUNTRY = "SET_SELECTED_COUNTRY";
export const SET_CITIES_LIST = "SET_CITIES_LIST";

export const SET_RESULT_OBJECT = "SET_GEO_CITY_RESULT";


const payload = (t, p) => ({type: t, payload: p});

export const setLoading = (p) => (payload(SET_LOADING, p));
export const setCitiesList = (p) => (payload(SET_CITIES_LIST, p));
export const setSearchList = (p) => (payload(SET_SEARCH_LIST, p));
export const setCitySearch = (p) => (payload(SET_CITY_SEARCH, p));
export const setCountrySearch = (p) => (payload(SET_COUNTRY_SEARCH, p));
export const setResult = (p) => (payload(SET_RESULT_OBJECT, p));
export const setSelectedCountry = (p) => (payload(SET_SELECTED_COUNTRY, p));

const generateEndPoint = (endPoint) => (API_URL + endPoint);
const withBaseParams = (params) => ({...params, username: API_USERNAME, type: API_DATATYPE});

export function getCitiesByName(data) {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(generateEndPoint('/search'), {
            params: withBaseParams({
                name_equals: data.search,
                orderby: "population",
                maxRows: 3
            })
        })
        .then(response => {
            if(response.data && response.data.geonames) {
                dispatch(setSearchList(response.data.geonames));
            }
            dispatch(setLoading(false));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function getCountriesByName(data) {
    return getCitiesByName(data);
}

export function getCitiesByCountryCode(data) {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(generateEndPoint('/search'), {
            params: withBaseParams({
                country: data.search,
                orderby: "population",
                maxRows: 3
            })
        })
        .then(response => {
            if(response.data && response.data.geonames) {
                dispatch(setCitiesList(response.data.geonames));
            }
            dispatch(setLoading(false));
        }).catch(error => {
            console.log(error);
        });
    };
}  