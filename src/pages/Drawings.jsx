import { useState } from 'react';
import { getAllDrawings } from '../api/api';
import StyleOne from '../ui/StyleOne';
import { useEffect } from 'react';
import StyleTitle from '../ui/StyleTitle';

const Drawings = () => {
  const [allDrawings, setAllDrawings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDrawings();
        const retrievedData = data.map((dat) => ({
          id: dat.id,
          title: dat.title,
          image: dat.image,
          category: dat.category,
        }));
        setAllDrawings(retrievedData);
      } catch (error) {
        console.error('Error fetching drawing details:', error);
      }
    };

    fetchData();
  }, []);

  if (!allDrawings) {
    return <p>Loading...</p>;
  }

  return (
    <main className="container mx-auto py-8">
      <StyleTitle title="Drawings" />
      {allDrawings.map((drawing) => (
        <StyleOne
          key={drawing.id}
          imageTitle={drawing.title}
          imageUrlPath={drawing.image}
          imageCat={drawing.category}
          imageRouteTo={drawing.id}
        />
      ))}
    </main>
  );
};

export default Drawings;
