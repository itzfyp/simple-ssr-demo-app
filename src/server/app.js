import express from 'express';
import fetch from 'cross-fetch';
import RootRender from './RootRender';

import ImageLists from '../client/components/ImageLists';


const app = express();

app.use(express.static('public'));


app.get('*', (req, res, next) => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(resStream => resStream.json())
        .then(imageRes => {
            res
                .status(200)
                .send(
                    RootRender(ImageLists, { images: imageRes }, { images: imageRes })
                )
        })
        .catch(err => res
            .status(404)
            .send(
                RootRender(ImageLists, { images: [] }, { images: [] })
            ))
});


app.listen(3000, () => {
    console.log('Running in localhost:3000');
});