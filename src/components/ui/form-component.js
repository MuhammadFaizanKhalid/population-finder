import React from 'react';


export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Enter City Name' value={this.state.value} onChange={this.handleChange} />
                <input className='flat-button' type="submit" value="Submit" />
            </form>
        );
        
    }

}