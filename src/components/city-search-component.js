import React from 'react';
import Page from './ui/page';
import { withRouter } from 'react-router-dom';
import InputField from './ui/input-field';
import { connect } from 'react-redux';
import { setCitySearch, getCitiesByName, setResult } from '../state-management/app-actions';

class CitySearchComponent extends React.Component {

    handleInputChange(e) {
        this.props.setCitySearch(e.value);
        if(e.value.length > 2) {
            this.props.getCitiesByName({search: e.value});
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
                                    {list[index].name}, {list[index].adminName1}, {list[index].countryName}
                                </div>
                            </li>
                        );
    };

    render(){
        const { citySearch, searchList } = this.props.appState;
        return(
            <Page title="Population Finder" subtitle="Search By City">
                <InputField 
                    name="citySearch"
                    hasSubmitBtn={true}
                    buttonIcon="S"
                    maxWidth={300}
                    value={citySearch}
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
        setCitySearch,
        getCitiesByName,
        setResult
    }
)(CitySearchComponent));