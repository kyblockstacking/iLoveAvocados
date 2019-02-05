import React, { Component } from 'react';

//components
import Tooltip from './Tooltip';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
        };
    };

    render() {

        const { href, tooltip, children } = this.props;

        const styles = {
            button: {
                fontFamily: 'Archivo',
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                border: '2px solid #568203',
                padding: '0.5em',
                marginBottom: '2vh',
                borderRadius: '5px',
                width: '200px',
                backgroundColor: this.state.backgroundColor,
            },
        };

        return (
            <a
                href={href}
                onMouseEnter={() => { this.setState({ backgroundColor: '#4c6e66' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'white' }) }}
                style={styles.button}>
                <Tooltip tooltip={tooltip}>
                    {children}
                </Tooltip>
            </a>
        );
    };

};

export default Button;