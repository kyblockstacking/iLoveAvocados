import React, { Component } from 'react';

class InbetweenText extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    render() {
        return (
            <div style={{ textAlign: 'center', background: 'white', padding: '2em' }}>{this.props.children}</div>
        );
    };
};

export default InbetweenText;