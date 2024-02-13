import React from 'react';
import { Link } from 'react-router-dom';

const StyleOne = ({ imageTitle, imageRouteTo, imageUrlPath, imageCat }) => {
  const urlRoute =
    imageCat === 'Drawing'
      ? `/drawings/${imageRouteTo}`
      : imageCat === 'Painting'
        ? `/paintings/${imageRouteTo}`
        : '';

  return (
    <Link to={urlRoute}>
      <img
        src={imageUrlPath}
        alt={imageTitle}
        className="mx-auto mb-5 w-full shadow-lg md:w-1/2"
      />
    </Link>
  );
};

export default StyleOne;
