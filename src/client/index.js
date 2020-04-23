import React from 'react'
import ReactDom from 'react-dom';
import "./index.css";
import ImageLists from './components/ImageLists';

/**
 * =============================================
 *  This is simple POC for server side rendering with React
 * 
 *  React router and Redux are not touched in this poc
 * 
 *  Here we are rendering Image list on server side
 * 
 *  Shipping rendered HTML with react code
 * 
 *  React in Browser will hydrate the application and bind events
 * 
 *  Once all hydrate completed, we are able to click thumbnail and view respective Original Image and Title
 * 
 * =============================================
 */


/**
 * As we are not covering Redux store as part of this POC,
 * I am accessing server response and passing to simple image list component
 */
const mockStore = window.INITAL_STATE;


/**
 *  A simple Image list component
 */

const app = <ImageLists images={mockStore.images} />;

ReactDom.hydrate(app, document.getElementById('root'));