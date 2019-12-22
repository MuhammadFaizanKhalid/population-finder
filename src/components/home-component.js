import React from 'react';
import FlatButton from './ui/flat-button';
import Page from './ui/page';

export default class HomeComponent extends React.Component {

    render() {
        return (
            <Page title="Population Finder">
                <FlatButton 
                    title="Search By City"
                    link="/city-search"
                />
                <FlatButton 
                    title="Search By Country"
                    link="/country-search"
                />
            </Page>
        );
    }

}