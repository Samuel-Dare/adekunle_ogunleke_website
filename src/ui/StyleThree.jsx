import React from 'react';

const StyleThree = ({ paragraph, imageUrlPath, imageTitle }) => {
  return (
    <div className="container mx-auto mb-14 px-5 md:px-0">
      <p className="mb-7">{paragraph}</p>
      <img
        src={imageUrlPath}
        alt={imageTitle}
        className="max-h-[50vh] w-full md:max-h-screen"
      />
    </div>
  );
};

export default StyleThree;
