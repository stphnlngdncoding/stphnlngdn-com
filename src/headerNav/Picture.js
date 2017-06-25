import React from 'react';
import mypic from './mypic.jpg';
import './Picture.css'

export default function Picture(props) {
  return (
    <div className="header-picture-container">
      <div className="header-wrapper">
        <img className="header-picture" src={mypic} />
      </div>
    </div>
  )
}