import React, { Component } from 'react';
import Image from './Image';

class ImageLists extends Component {

    render() {
        const { images } = this.props;

        return (<div>
            <h1 className="app-title">Click and View</h1>
            <div className="image-container">
                {
                    images.map(img => <Image image={img} key={img.id} />)
                }
            </div>
        </div>);
    }
}

export default ImageLists;