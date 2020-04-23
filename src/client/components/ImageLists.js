import React, { Component } from 'react';
import Image from './Image';

class ImageLists extends Component {

    render() {
        const { images } = this.props;

        return (<div className="image-container">
            {
                images.map(img => <Image image={img} key={img.id} />)
            }
        </div>);
    }
}

export default ImageLists;