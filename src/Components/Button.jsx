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
            <div
                onMouseEnter={() => { this.setState({ backgroundColor: 'green' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'white' }) }}
                style={{ fontFamily: 'Archivo', display: 'block', margin: '0 auto', textAlign: 'center', background: this.state.backgroundColor, border: '2px solid teal', padding: '5px', marginRight: '45vw', marginLeft: '45vw' }}>
                {this.props.children}
            </div>
        );
    };
};

export default Button;