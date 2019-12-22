import React from 'react';
import { connect } from 'react-redux'
import Page from './ui/page';
import { withRouter } from "react-router-dom";

class PopulationResultComponent extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
    }

    render() {
        return (
            <Page title="Population Finder" subtitle="Loading...">
                <div className="population-result">
                    <h5>Population</h5>
                    <span>Loading...</span>
                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    appState: state
});

export default withRouter(connect(
    mapStateToProps,
    {}
)(PopulationResultComponent));