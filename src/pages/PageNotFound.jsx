import { FaExclamationCircle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <FaExclamationCircle className="mb-4 text-6xl text-colorBrand2 md:text-8xl" />
      <h1 className="text-gray-800 mb-2 text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Page Not Found
      </h1>
      <p className="text-gray-600 text-center text-base md:text-lg lg:text-xl">
        The page you're looking for does not exist.{' '}
      </p>
    </div>
  );
};

export default PageNotFound;
