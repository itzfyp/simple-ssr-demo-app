import React from 'react';
import { renderToString } from 'react-dom/server';


export default (Comp, props, mockStore) => {


    const content = renderToString(<Comp {...props} />);

    return (`
    <!DOCTYPE html>
        <html>
            <body>
                <div id="modal-container"></div>
                <div id="root">${content}</div>
                <script>
                    window.INITAL_STATE=${JSON.stringify(mockStore)}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
}