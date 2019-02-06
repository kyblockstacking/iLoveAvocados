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
        },
        showFooter: false

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
            footerOpen: {
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

        this.handleFooter = () => {
            if (this.state.showFooter === true) {
                this.setState({ footer: styles.footer, showFooter: false })
            }
            else if (this.state.showFooter === false) {
                this.setState({ footer: styles.footerOpen, showFooter: true })
            }
        };

        return (
            <div
                className='footer'
                style={this.state.footer}
                //onMouseEnter for web users
                onMouseEnter={() => this.setState({ footer: styles.footerOpen, visible: styles.show, showFooter: true })}
                onMouseLeave={() => this.setState({ footer: styles.footer, visible: styles.hidden, showFooter: false })}
            >
                <span
                    className='moreInformation'
                    //onClick for mobile users
                    onClick={this.handleFooter}
                >
                    <i
                        className='fas fa-arrow-up'
                    />
                    &nbsp;EXPAND FOR MORE INFORMATION&nbsp;
                    <i
                        className='fas fa-arrow-up'
                    />
                </span>


                <div style={this.state.visible}>GITHUB</div>
                <div style={this.state.visible}>LINKEDIN</div>
                <div style={this.state.visible}>FACEBOOK</div>
            </div >
        );
    };

};

export default Footer;