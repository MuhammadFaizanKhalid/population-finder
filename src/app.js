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
                    <Route path='/result/:id'>
                        <PopulationResultComponent />
                    </Route>
                    <Route path='/country'>
                        <CitiesByCountryComponent />
                    </Route>
                    <Route path="/country-search">
                        <CountrySearchComponent />
                    </Route>
                    <Route path="/city-search">
                        <CitySearchComponent />
                    </Route>
                    <Route path="/">
                        <HomeComponent />
                    </Route>
                </Switch>
            </Router>
        )
    }

}