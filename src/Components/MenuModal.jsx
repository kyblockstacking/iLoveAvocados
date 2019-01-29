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
        return (
            <span>
                <i onClick={this.handleShow} className="fas fa-list"></i>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textAlign: 'center' }}>Avocado Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ textAlign: 'center' }}>
                        <a href='/aboutme'>About Me</a>
                        <br />
                        <a href='/recipes'>Recipes</a>
                        <br />
                        <a href='origin'>Origin</a>
                    </Modal.Body>
                </Modal>
            </span>
        );
    };
};

export default MenuModal;