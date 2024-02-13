import React, { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAngleUp,
} from 'react-icons/fa';
// import { useScreenSize } from '../contexts/ScreenSize';

function Footer() {
  // const {
  //   windowDimension: { winHeight },
  // } = useScreenSize();
  // const [bodyHeight, setBodyHeight] = useState(document.body.scrollHeight);
  // const [isContentFilledPage, setIsContentFilledPage] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setBodyHeight(document.body.scrollHeight);
  //   };

  //   setIsContentFilledPage(bodyHeight > winHeight);

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [bodyHeight, winHeight]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`mt-10 w-full border-t-2 border-colorGrey50 bg-colorGrey900 p-10 md:p-16 lg:p-20`}
    >
      <div className="flex items-center justify-between text-colorBrand2">
        <ul className="flex gap-5 text-xl md:text-2xl">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="mailto:ae.ogunleke@gmail.com">
            <FaEnvelope />
          </a>
        </ul>

        <div
          className="cursor-pointer rounded-full border-2 border-colorBrand2"
          onClick={handleScrollToTop}
        >
          <FaAngleUp className="text-xl md:text-2xl" />
        </div>
      </div>
      <div className="my-7 w-full border-t border-colorGrey50 "></div>
      <p className="text-center text-colorGrey0 md:text-lg">
        &copy; {new Date().getFullYear()} Kunle Ogunleke. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
