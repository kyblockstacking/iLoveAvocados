import React, { Component } from 'react';

//components
import Tooltip from './Tooltip';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonStyle: {
                fontFamily: 'Archivo',
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                border: '2px solid #4c6e66',
                padding: '0.5em',
                marginBottom: '2vh',
                borderRadius: '5px',
                width: '200px',
                textDecoration: 'none',
                backgroundColor: 'white',
                transition: 'all 0.3s ease 0s',
                boxShadow: '0px 5px 10px #909090',
                fontWeight: '900'
            }
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
                border: '2px solid #4c6e66',
                padding: '0.5em',
                marginBottom: '2vh',
                borderRadius: '5px',
                width: '200px',
                textDecoration: 'none',
                backgroundColor: 'white',
                transition: 'all 0.3s ease 0s',
                boxShadow: '0px 5px 10px #909090',
                fontWeight: '900'
            },
            buttonHover: {
                fontFamily: 'Archivo',
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                border: '2px solid #4c6e66',
                padding: '0.5em',
                marginBottom: '2vh',
                borderRadius: '5px',
                width: '200px',
                textDecoration: 'none',
                boxShadow: '0px 10px 20px #4c6e66',
                color: '#fff',
                transform: 'translateY(-5px)',
                backgroundColor: '#4c6e66',
                transition: 'all 0.3s ease 0s',
                fontWeight: '900'
            }
        };

        return (
            <a
                className='button'
                href={href}
                onMouseEnter={() => { this.setState({ buttonStyle: styles.buttonHover }) }}
                onMouseLeave={() => { this.setState({ buttonStyle: styles.button }) }}
                style={this.state.buttonStyle}>
                <Tooltip
                    className='tooltip'
                    id={'button-information'}
                    tooltip={tooltip}>
                    {children} <i class='fas fa-arrow-right' />
                </Tooltip>
            </a>
        );
    };

};

export default Button;