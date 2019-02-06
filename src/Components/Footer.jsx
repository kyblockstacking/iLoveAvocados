import React, { Component } from 'react';

class Footer extends Component {

    state = {
        footer: {
            display: 'flex',
            flexDirection: 'column',
            height: '3vh',
            opacity: '0.5',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            flexShrink: '0',
            textAlign: 'center',
            transition: 'all 0.3s ease 0s',
            background: '#98FB98'
        },
        visible: {
            visibility: 'hidden'
        }

    }


    render() {

        const styles = {
            footer: {
                display: 'flex',
                flexDirection: 'column',
                height: '3vh',

                opacity: '0.5',
                position: 'fixed',
                bottom: '0',
                width: '100%',
                flexShrink: '0',
                textAlign: 'center',
                transition: 'all 0.3s ease 0s',
                background: '#98FB98'
            },
            footerHover: {
                display: 'flex',
                flexDirection: 'column',
                height: '10vh',

                opacity: '0.5',
                position: 'fixed',
                bottom: '0',
                width: '100%',
                flexShrink: '0',
                textAlign: 'center',
                transition: 'all 0.3s ease 0s',
                background: '#98FB98'
            },
            show: {
                visibility: 'visible'
            },
            hidden: {
                visibility: 'hidden'
            }
        };

        return (
            <div
                className='footer'
                style={this.state.footer}
                onMouseEnter={() => this.setState({ footer: styles.footerHover, visible: styles.show })}
                onMouseLeave={() => this.setState({ footer: styles.footer, visible: styles.hidden })}
            >
                <span className='moreInformation'>
                    <i className='fas fa-arrow-up'></i>
                    &nbsp;EXPAND FOR MORE INFORMATION&nbsp;
                    <i className='fas fa-arrow-up'></i>
                </span>


                <div style={this.state.visible}>GITHUB</div>
                <div style={this.state.visible}>LINKEDIN</div>
                <div style={this.state.visible}>FACEBOOK</div>
            </div >
        );
    };

};

export default Footer;