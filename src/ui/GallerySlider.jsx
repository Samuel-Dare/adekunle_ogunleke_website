import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getAllArtworks } from '../api/api';
import StyleTitle from './StyleTitle';
import '../index.css';
import Button from '../utils/Button';

const GallerySlider = () => {
  const [allArtworks, setAllArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const data = await getAllArtworks();
        const retrievedData = data.map((dat) => ({
          id: dat.id,
          title: dat.title,
          image: dat.image,
          category: dat.category,
        }));
        setAllArtworks(retrievedData);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };

    fetchArtworks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseEnter = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  if (!allArtworks) return <p>Loading...</p>;

  return (
    <main className="my-20">
      <StyleTitle title="Gallery" />
      <Slider {...settings}>
        {allArtworks.map((artWork) => (
          <div key={artWork.id} className="relative">
            <div className="mx-1 h-64 overflow-hidden md:mx-0 md:mr-3 md:h-screen">
              <img
                src={artWork.image}
                alt={artWork.title}
                className="h-full w-full transform transition-transform duration-300 hover:scale-110 md:w-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="bg-black absolute inset-0 flex flex-col items-center justify-between bg-opacity-25 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="my-auto flex max-h-fit max-w-40 flex-col gap-3 rounded-lg bg-colorGrey900 p-3 text-center opacity-85">
                <h2 className="text-white mb-4 text-lg font-bold">
                  {artWork.title}
                </h2>
                <Button
                  type="pointer"
                  to={`${artWork.category === 'Drawing' ? '/drawings' : artWork.category === 'Painting' ? '/paintings' : ''}/${artWork.id}`}
                >
                  See Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-10 text-center">
        <Button type="primary" to="/gallery">
          See Gallery
        </Button>
      </div>
    </main>
  );
};

export default GallerySlider;
