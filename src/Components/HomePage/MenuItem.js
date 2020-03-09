import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.scss';

function MenuItem({ title, imageUrl, size, history, link, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${link}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
