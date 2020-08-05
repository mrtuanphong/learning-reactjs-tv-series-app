import React from 'react';
import loaderSrc from '../../assets/images/loader.gif';

const Loader = props => (
  <div>
    <img 
      src={ loaderSrc } 
      style={{'width': '2rem', 'margin':'1rem'}}
      alt="Loader icon" />
  </div>
)

export default Loader;