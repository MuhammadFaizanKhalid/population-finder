import React from 'react';
import { connect } from 'react-redux'
import Page from './ui/page';
import InputField from './ui/input-field';
import { setCountrySearch } from '../state-management/app-actions';

class CountrySearchComponent extends React.Component {

    handleInputChange(e) {
        this.props.setCountrySearch(e.value);
    }

    render(){
        const { countrySearch } = this.props.appState;
        return(
            <Page title="Population Finder" subtitle="Search By Country">
                <InputField 
                    name="countrySearch"
                    hasSubmitBtn={true}
                    buttonIcon="S"
                    maxWidth={300}
                    value={countrySearch}
                    onUpdate={(e) => this.handleInputChange(e)}
                />
                <ul className="searched-list">
                    <li>
                        <a href="population-by-city/1">Paris</a>
                    </li>
                    <li>
                        <a href="population-by-city/2">france</a>
                    </li>
                    <li>
                        <a href="population-by-city/3">egypt</a>
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
    {
        setCountrySearch
    }
)(CountrySearchComponent);