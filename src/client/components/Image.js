import React, { Component } from 'react';
import Modal from './Modal';

class Image extends Component {

    state = {
        showModal: false
    }

    openModal = () => {
        console.log('clockde....');
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        const { url, title, thumbnailUrl } = this.props.image;

        return (
            <div className="image">
                <img src={thumbnailUrl} onClick={this.openModal} alt={title} />
                {this.state.showModal ? <Modal url={url} title={title} closeModal={this.closeModal} /> : false}
            </div>);
    }
}

export default Image;