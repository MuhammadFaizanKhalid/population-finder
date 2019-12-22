import React from 'react';
import PropTypes from 'prop-types';

export default class Page extends React.Component{

    render(){
        const { title, subtitle } = this.props;
        return(
            <div className='page'>
                <div className='page-heading'>
                    <h1>{title}</h1>
                    { subtitle ? <h3>{subtitle}</h3> : null }
                </div>
                <div className='page-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string 
}