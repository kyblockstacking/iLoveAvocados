import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
        };
    };



    render() {
        return (
            <button
                onMouseEnter={() => { this.setState({ backgroundColor: '#4c6e66' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'white' }) }}
                style={{ fontFamily: 'Archivo', display: 'block', margin: '0 auto', textAlign: 'center', background: this.state.backgroundColor, border: '2px solid #568203', padding: '1em', marginBottom: '2vh', borderRadius: '5px' }}>
                {this.props.children}
            </button>
        );
    };
};

export default Button;