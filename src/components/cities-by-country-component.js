import React from 'react';
import Page from './ui/page';
import { connect } from 'react-redux'

class CitiesByCountryComponent extends React.Component {

    render(){
        return(
            <Page title="Population Finder" subtitle="Pakistan">
                <ul className="searched-list">
                    <li>
                        <a href="population-by-city/1">Karachi</a>
                    </li>
                    <li>
                        <a href="population-by-city/2">Lahore</a>
                    </li>
                    <li>
                        <a href="population-by-city/3">Islamabad</a>
                    </li>
                </ul>
            </Page>
        );

    }
}

const mapStateToProps = state => ({
    appState: state
});

export default connect(
    mapStateToProps,
    {}
)(CitiesByCountryComponent);