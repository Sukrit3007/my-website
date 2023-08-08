import React from 'react';
import './Card.css'; // Import your external CSS file for styling

const Card = ({ link, imageSrc, title, description }) => {
  return (
    <a href={link} className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
