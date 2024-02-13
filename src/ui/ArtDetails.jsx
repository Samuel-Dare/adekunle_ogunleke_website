import React from 'react';

const ArtDetails = ({
  title,
  medium,
  year,
  category,
  description,
  dimensions,
}) => {
  return (
    // <main className="flex">
    <div className="mx-auto my-36 max-w-5xl rounded-lg bg-colorGrey700 p-4 py-8 shadow-lg md:p-8">
      <h2 className="text-gray-800 mb-3 text-xl font-semibold md:text-2xl lg:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm font-medium md:text-base">
            Medium:
          </span>
          <span className="text-gray-800 text-sm md:text-base">{medium}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm font-medium md:text-base">
            Year:
          </span>
          <span className="text-gray-800 text-sm md:text-base">{year}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm font-medium md:text-base">
            Category:
          </span>
          <span className="text-gray-800 text-sm md:text-base">{category}</span>
        </div>
        <div className="col-span-2 flex flex-col md:col-span-1 lg:col-span-2">
          <span className="text-gray-600 text-sm font-medium md:text-base">
            Description:
          </span>
          <p className="text-gray-800 text-sm md:text-base">{description}</p>
        </div>
        <div className="flex flex-col">
          {dimensions && (
            <>
              <span className="text-gray-600 text-sm font-medium md:text-base">
                Dimensions:
              </span>
              <span className="text-gray-800 text-sm md:text-base">
                {dimensions.width} x {dimensions.height} {dimensions.unit}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
    // </main>
  );
};

export default ArtDetails;
