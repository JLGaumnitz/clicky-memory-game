import React from 'react';
import './Container.css';
import Cover from '../Cover';

// main container for each Book Cover component
// loops through each index in props.covers, which contains an array of book cover images
// to create a new Cover component for each image
// attaches the passed down clickEvent function to each Cover component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.covers.map((a, i) => <Cover name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;