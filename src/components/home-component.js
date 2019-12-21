import React from 'react';
import FlatButton from './ui/flat-button';

export default class HomeComponent extends React.Component {

    render() {
        return (
            <div className='page'>
                <div className='page-heading'>
                    <h1>City Pop</h1>
                    <h3>Search by cities</h3>
                </div>
                <div className='page-content'>
                    <FlatButton />
                </div>
            </div>
        );
    }

}