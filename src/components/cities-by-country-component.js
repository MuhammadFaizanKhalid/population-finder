import React from 'react';
import Page from './ui/page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCitiesByCountryCode, setResult } from '../state-management/app-actions';

class CitiesListComponent extends React.Component {

    componentDidMount() {
        const { history, match, getCitiesByCountryCode } = this.props;
        const { countryCode } = match.params;
        if(countryCode) {
            getCitiesByCountryCode({search: countryCode});
        } else {
            history.push("/");
        }
    }

    handleCityPressed(e, geoItem) {
        e.preventDefault();
        this.props.setResult(geoItem);
        this.props.history.push("/result");
    }

    mapList(list, instance) {
        return Object
                    .keys(list)
                        .map(index => 
                            <li key={list[index].geonameId}>
                                <div onClick={e => instance.handleCityPressed(e, list[index])}>
                                    {list[index].name}, {list[index].adminName1}
                                </div>
                            </li>
                        );
    };

    render(){
        const { citiesList, selectedCountry } = this.props.appState;
        return(
            <Page title="Population Finder" subtitle={selectedCountry.countryName}>
                <ul className="searched-list">
                    { citiesList && this.mapList(citiesList, this) }
                </ul>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    appState: state
});

export default withRouter(connect(
    mapStateToProps,
    {
        getCitiesByCountryCode,
        setResult
    }
)(CitiesListComponent));