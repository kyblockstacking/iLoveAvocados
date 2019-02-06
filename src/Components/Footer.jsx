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
            background: '#4c6e66',
            color: 'white'
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
                background: '#4c6e66',
                color: 'white'
            },
            footerOpen: {
                display: 'flex',
                flexDirection: 'column',
                height: '30vh',
                opacity: '0.8',
                position: 'fixed',
                bottom: '0',
                width: '100%',
                flexShrink: '0',
                textAlign: 'center',
                transition: 'all 0.3s ease 0s',
                background: '#4c6e66',
                color: 'white'
            },
            show: {
                visibility: 'visible',
                opacity: '1',
                fontSize: '2em',
                width: '100%'
            },
            hidden: {
                visibility: 'hidden'
            },
            footerLinks: {
                color: 'white'
            }
        };
        //opens or closes the footer for mobile users
        //attached to onClick
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

                <br />
                <div style={this.state.visible}>
                    <i className='fab fa-github-alt' />
                    &nbsp;
                    <a style={styles.footerLinks} href='https://github.com/kyblockstacking/ILoveAvocados/'>
                        ILoveAvocados's Repository
                    </a>
                </div>
                <div style={this.state.visible}>
                    <i className='fab fa-github-square' />
                    &nbsp;
                    <a style={styles.footerLinks} href='https://github.com/kyblockstacking/'>
                        GitHub
                    </a>
                </div>
                <div style={this.state.visible}>
                    <i className='fab fa-linkedin' />
                    &nbsp;
                    <a style={styles.footerLinks} href='https://www.linkedin.com/in/kevinyang92/'>
                        LinkedIn
                    </a>
                </div>

                <i className='fas fa-copyright' style={{ padding: '10vh 0 0 0' }}> 2019 | ILoveAvocados by Kevin Yang </i>
            </div >
        );
    };

};

export default Footer;