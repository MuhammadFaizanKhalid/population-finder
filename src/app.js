import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomeComponent from './components/home-component';
import CitySearchComponent from './components/city-search-component';
import CountrySearchComponent from './components/country-search-component';
import PopulationResultComponent from './components/population-result-component';
import CitiesByCountryComponent from './components/cities-by-country-component';

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/result' component={PopulationResultComponent} />
                    <Route path='/country/:countryCode' component={CitiesByCountryComponent} exact={false}/>
                    <Route path="/country-search" component={CountrySearchComponent} />
                    <Route path="/city-search" component={CitySearchComponent} />
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </Router>
        )
    }

}