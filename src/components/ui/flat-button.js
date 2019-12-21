import React from 'react';
import FormComponent from './form-component';

export default class FlatButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClickCity = this.onClickCity.bind(this);
    }
    onClickCity(e) {
        e.preventDefault();
        return(<FormComponent />);
    }

    onClickCountry(e) {
        e.preventDefault();
        return(<FormComponent />);
    }

    render() {
        return (
            <div>
                <button className="flat-button" onClick={this.onClickCity}>Search By City</button>
                <button className="flat-button" onClick={this.onClickCountry}>Search By Country</button>
            </div>    
        );
    }

}