import { useParams } from 'react-router-dom';
import { getArtwork } from '../api/api';
import ArtDetails from '../ui/ArtDetails';
import { useEffect, useState } from 'react';

const DrawingDetails = () => {
  const { drawingId } = useParams();
  const [drawing, setDrawing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtwork(drawingId);
        setDrawing(data);
      } catch (error) {
        console.error('Error fetching drawing details:', error);
      }
    };

    fetchData();
  }, [drawingId]);

  if (!drawing) {
    return <p>Loading...</p>;
  }

  const {
    title,
    medium,
    year,
    category,
    description,
    dimensions = {},
  } = drawing;

  return (
    <ArtDetails
      title={title}
      medium={medium}
      year={year}
      category={category}
      description={description}
      dimensions={dimensions}
    />
  );
};

export default DrawingDetails;
