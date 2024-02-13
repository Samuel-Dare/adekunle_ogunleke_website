import { useState } from 'react';
import { getAllPaintings } from '../api/api';
import StyleOne from '../ui/StyleOne';
import { useEffect } from 'react';
import StyleTitle from '../ui/StyleTitle';

const Paintings = () => {
  const [allPaintings, setAllPaintings] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPaintings();
        const retrievedData = data.map((dat) => ({
          id: dat.id,
          title: dat.title,
          image: dat.image,
          category: dat.category,
        }));
        setAllPaintings(retrievedData);
      } catch (error) {
        console.error('Error fetching painting details:', error);
      }
    };

    fetchData();
  }, []);

  if (!allPaintings) {
    return <p>Loading...</p>;
  }

  return (
    <main className="container mx-auto py-8">
      <StyleTitle title="Paintings" />
      {allPaintings.map((painting) => (
        <StyleOne
          key={painting.id}
          imageTitle={painting.title}
          imageUrlPath={painting.image}
          imageRouteTo={painting.id}
          imageCat={painting.category}
        />
      ))}
    </main>
  );
};

export default Paintings;
