import React from 'react';
import PropTypes from 'prop-types';

export default class InputField extends React.Component{

    render(){
        const { buttonIcon, maxWidth, value, onUpdate, name, hasSubmitBtn } = this.props;
        return(
            <div style={{maxWidth: maxWidth || 'inherited'}} className="input-field-wrapper">
                <input 
                    className="input-field" 
                    type="text" 
                    placeholder="Type Here..."
                    name={name} 
                    value={value} 
                    onChange={(e) => onUpdate({name, value: e.target.value})}
                />
                {
                    buttonIcon ? 
                        <button className="input-field-icon" type={hasSubmitBtn ? 'submit' : 'button'}>
                            {buttonIcon}
                        </button> : null
                }
            </div>
        );
    }
}

InputField.propTypes = {
    buttonIcon: PropTypes.string,
    hasSubmitBtn: PropTypes.bool,
    maxWidth: PropTypes.number,
    value: PropTypes.string,
    onUpdate: PropTypes.func,
    name: PropTypes.string.isRequired
}