import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

    render() {
        const { url, title, closeModal } = this.props;

        return ReactDOM.createPortal(
            <div className=" back-drop" onClick={closeModal}>
                <div className="modal">
                    <h1>{title}</h1>
                    <img src={url} alt="image" />
                </div>
            </div>
            ,
            document.getElementById('modal-container')
        );
    }
}

export default Modal;