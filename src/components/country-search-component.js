import React from 'react';
import Page from './ui/page';
import { withRouter } from 'react-router-dom';
import InputField from './ui/input-field';
import { connect } from 'react-redux';
import { setCountrySearch, getCountriesByName, setSelectedCountry } from '../state-management/app-actions';

class CountrySearchComponent extends React.Component {

    handleInputChange(e) {
        this.props.setCountrySearch(e.value);
        if(e.value.length > 2) {
            this.props.getCountriesByName({search: e.value});
        }
    }

    handleCityPressed(e, geoItem) {
        e.preventDefault();
        this.props.setSelectedCountry(geoItem);
        this.props.history.push("/country/"+geoItem.countryCode);
    }

    getUniqueCountryList(list) {
        let unqiueList = [];
        let checked = [];
        Object
            .keys(list)
                .forEach(index => {
                        if(!checked.includes(list[index].countryCode)) {
                            checked.push(list[index].countryCode);
                            unqiueList.push(list[index]);
                        }
                    });
        return unqiueList;
    }

    mapList(list, instance) {
        const uList = this.getUniqueCountryList(list);
        return Object
                    .keys(uList)
                        .map(index => 
                            <li key={uList[index].geonameId}>
                                <div onClick={e => instance.handleCityPressed(e, uList[index])}>
                                    {uList[index].countryName}
                                </div>
                            </li>
                        );
    };

    render(){
        const { countrySearch, searchList } = this.props.appState;
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
                    { searchList && this.mapList(searchList, this) }
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
        setCountrySearch,
        getCountriesByName,
        setSelectedCountry
    }
)(CountrySearchComponent));