import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom'

class FlatButton extends React.Component {
    
    onPressed(e) {
        e.preventDefault();
        const { link, buttonPressesd } = this.props;
        if(link) {
            this.props.history.push(link);
        }
        if(buttonPressesd) {
            buttonPressesd(e);
        }
    }

    render() {
        const { title } = this.props;
        return (
            <button className="flat-button" onClick={(e) => this.onPressed(e)}>{title}</button>
        );
    }
}

export default withRouter(FlatButton);

FlatButton.propTypes = {
    title: PropTypes.string.isRequired,
    buttonPressesd: PropTypes.func,
    link: PropTypes.string,
    isSubmitButton: PropTypes.bool 
}