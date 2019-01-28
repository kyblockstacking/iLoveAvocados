import React, { Component } from 'react';
import Tooltip from './Tooltip';

class Button extends Component {
    constructor({ props }) {
        super(props);

        this.state = {
            backgroundColor: 'white',
        };
    };

    render() {
        return (
            <a
                href={this.props.href}
                onMouseEnter={() => { this.setState({ backgroundColor: '#4c6e66' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'white' }) }}
                style={{ fontFamily: 'Archivo', display: 'block', margin: '0 auto', textAlign: 'center', background: this.state.backgroundColor, border: '2px solid #568203', padding: '0.5em', marginBottom: '2vh', borderRadius: '5px', width: '200px' }}>

                <Tooltip tooltip={this.props.tooltip}>
                    {this.props.children}
                </Tooltip>
            </a>
        );
    };
};

export default Button;