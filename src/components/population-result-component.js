import React from 'react';
import { connect } from 'react-redux'
import Page from './ui/page';
import { withRouter } from "react-router-dom";

class PopulationResultComponent extends React.Component {

    componentDidMount() {
        const { history, appState } = this.props;
        setTimeout(() => {
            if(Object.keys(appState.result).length === 0) {
                history.push("/");
            }
        }, 3000);
    }

    numberWithSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { name, population } = this.props.appState.result;
        const pop = population === 0 ? "0" : population;

        return (
            <Page title="Population Finder" subtitle={name || "Loading..."}>
                <div className="population-result">
                    <h5>Population</h5>
                    <span>{this.numberWithSeparator(pop) || "Loading..."}</span>
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