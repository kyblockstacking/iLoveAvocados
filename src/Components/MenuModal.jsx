import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class MenuModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    };

    handleShow() {
        this.setState({ show: true });
    };

    render() {

        const styles = {
            modalBody: {
                textAlign: 'center'
            },
            modalLinks: {
                textDecoration: 'none'
            }
        };

        return (
            <span>
                <i className='modalOpen' onClick={this.handleShow} className="fas fa-list" style={{ cursor: 'help', color: '#618acc' }} />

                <Modal className='modal' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className='modalHeader' closeButton>
                        <Modal.Title className='modalTitle'>Avocado Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalBody' style={styles.modalBody}>
                        <a style={styles.modalLinks} href='/'>Home</a>
                        <br />
                        <a style={styles.modalLinks} href='/aboutme'>About Me</a>
                        <br />
                        <a style={styles.modalLinks} href='/recipes'>Recipes</a>
                        <br />
                        <a style={styles.modalLinks} href='origin'>Origin</a>
                    </Modal.Body>
                </Modal>
            </span>
        );
    };
};

export default MenuModal;