import React from 'react';
import Page from './ui/page';
import { Link } from "react-router-dom";
import InputField from './ui/input-field';
import { connect } from 'react-redux';
import { setCitySearch, getCitiesByName } from '../state-management/app-actions';

class CitySearchComponent extends React.Component {

    handleInputChange(e) {
        this.props.setCitySearch(e.value);
        if(e.value.length > 2) {
            this.props.getCitiesByName({search: e.value});
        }
    }

    mapList(list) {
        return Object
                    .keys(list)
                        .map(index => 
                            <li key={list[index].geonameId}>
                                <p onClick={this}>
                                    {list[index].name}, {list[index].adminName1}, {list[index].countryName}
                                </p>
                                {/* <Link to={"result/"+list[index].geonameId}>
                                    {list[index].name}, {list[index].adminName1}, {list[index].countryName}
                                </Link> */}
                            </li>
                        );
    };

    render(){
        const { citySearch, citySearchList } = this.props.appState;
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
                    { citySearchList && this.mapList(citySearchList) }
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
        setCitySearch,
        getCitiesByName
    }
)(CitySearchComponent);