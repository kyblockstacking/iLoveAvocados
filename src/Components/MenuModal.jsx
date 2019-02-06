import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class MenuModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.OpenModal = this.OpenModal.bind(this);
        this.CloseModal = this.CloseModal.bind(this);

        this.state = {
            show: false
        };
    }

    CloseModal() {
        this.setState({ show: false });
    };

    OpenModal() {
        this.setState({ show: true });
    };

    render() {

        const styles = {
            modalOpen: {
                cursor: 'help',
                color: '#618acc',
                fontSize: '1.5em'
            },
            modalBody: {
                textAlign: 'center'
            },
            modalLinks: {
                textDecoration: 'none'
            }
        };

        return (
            <span>
                <i
                    onClick={this.OpenModal}
                    className='fas fa-list modalOpen'
                    style={styles.modalOpen}
                />

                <Modal
                    className='modal'
                    show={this.state.show}
                    onHide={this.CloseModal}
                >
                    <Modal.Header
                        className='modalHeader'
                        closeButton
                    >
                        <Modal.Title
                            className='modalTitle'
                        >
                            Avocado Menu
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        className='modalBody'
                        style={styles.modalBody}
                    >
                        <a
                            className='modalLinkHome'
                            style={styles.modalLinks}
                            href='/'
                        >
                            Home
                            </a>
                        <br />
                        <a
                            className='modalLinkAboutMe'
                            style={styles.modalLinks}
                            href='/aboutme'
                        >
                            About Me
                            </a>
                        <br />
                        <a
                            className='modalLinkRecipes'
                            style={styles.modalLinks}
                            href='/recipes'
                        >
                            Recipes
                            </a>
                        <br />
                        <a
                            className='modalLinkOrigin'
                            style={styles.modalLinks}
                            href='origin'
                        >
                            Origin
                            </a>
                    </Modal.Body>
                </Modal>
            </span>
        );
    };

};

export default MenuModal;