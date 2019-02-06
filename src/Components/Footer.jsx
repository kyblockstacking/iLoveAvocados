import React, { Component } from 'react';

class Footer extends Component {

    state = {
        footer: {
            display: 'flex',
            flexDirection: 'column',
            height: '4vh',
            opacity: '0.6',
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
        showFooter: false,
        footerText: 'MORE INFORMATION',
        footerArrows: <i className='fas fa-arrow-up' />
    }

    render() {

        const styles = {
            footer: {
                display: 'flex',
                flexDirection: 'column',
                height: '4vh',
                opacity: '0.6',
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
                color: 'black',
            },
            show: {
                visibility: 'visible',
                opacity: '1',
                fontSize: '1.2em',
                width: '100%'
            },
            hidden: {
                visibility: 'hidden'
            },
            footerLinks: {
                color: 'black'
            },
            footerText: {
                color: 'white',
                fontSize: '1.4em',
            }
        };
        //opens or closes the footer for mobile users
        //attached to onClick
        this.handleFooter = () => {
            if (this.state.showFooter === true) {
                this.setState({
                    footer: styles.footer,
                    showFooter: false,
                    visible: styles.hidden,
                    footerText: 'CLICK FOR MORE INFORMATION',
                    footerArrows: <i className='fas fa-arrow-up' />
                })
            }
            else if (this.state.showFooter === false) {
                this.setState({
                    footer: styles.footerOpen,
                    showFooter: true,
                    visible: styles.show,
                    footerText: 'CLICK TO MINIMIZE INFORMATION',
                    footerArrows: <i className='fas fa-arrow-down' />
                })
            }
        };

        return (
            <div
                className='footer'
                style={this.state.footer}
                //onMouseEnter for web users
                onMouseEnter={() => this.setState({ footer: styles.footerOpen, visible: styles.show, showFooter: true, footerText: 'MINIMIZE INFORMATION', footerArrows: <i className='fas fa-arrow-down' /> })}
                onMouseLeave={() => this.setState({ footer: styles.footer, visible: styles.hidden, showFooter: false, footerText: 'MORE INFORMATION', footerArrows: <i className='fas fa-arrow-up' /> })}
            >
                <div
                    className='moreInformation'
                    //onClick for mobile users
                    onClick={this.handleFooter}
                >

                    <span style={styles.footerText} className='footerText'>
                        {this.state.footerArrows}
                        &nbsp;
                        {this.state.footerText}
                        &nbsp;
                        {this.state.footerArrows}
                    </span>

                </div>

                <br />

                <div
                    className='footerLinks'
                    style={{ height: '100%' }}
                >
                    {/* repo link */}
                    <div
                        className='repo'
                        style={this.state.visible}
                    >
                        <i className='fab fa-github-alt' />
                        &nbsp;
                    <a
                            style={styles.footerLinks}
                            href='https://github.com/kyblockstacking/ILoveAvocados/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            ILoveAvocados's Repository
                    </a>
                    </div>

                    {/* github link */}
                    <div
                        className='github'
                        style={this.state.visible}
                    >
                        <i className='fab fa-github' />
                        &nbsp;
                    <a
                            style={styles.footerLinks}
                            href='https://github.com/kyblockstacking/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            GitHub
                    </a>
                    </div>

                    {/* linkedin link */}
                    <div
                        className='linkedin'
                        style={this.state.visible}
                    >
                        <i className='fab fa-linkedin-in' />
                        &nbsp;
                    <a
                            style={styles.footerLinks}
                            href='https://www.linkedin.com/in/kevinyang92/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            LinkedIn
                    </a>
                    </div>

                    {/* email link */}
                    <div
                        className='email'
                        style={this.state.visible}
                    >
                        <i className='fas fa-envelope' />
                        &nbsp;
                        <a
                            style={styles.footerLinks}
                            href='mailto:kevin1992yang@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            kevin1992yang@gmail.com
                        </a>
                    </div>

                </div>

                <i className='fas fa-copyright' style={styles.footerText}>
                    &nbsp;2019&nbsp;|&nbsp;ILoveAvocados&nbsp;by&nbsp;Kevin&nbsp;Yang
                </i>

            </div >
        );
    };

};

export default Footer;