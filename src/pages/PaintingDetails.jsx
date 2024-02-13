import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArtDetails from '../ui/ArtDetails';
import { getArtwork } from '../api/api';

const PaintingDetails = () => {
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtwork(paintingId);
        setPainting(data);
      } catch (error) {
        console.error('Error fetching painting details:', error);
      }
    };

    fetchData();
  }, [paintingId]);

  if (!painting) return <p>Loading...</p>;

  const {
    title,
    medium,
    year,
    category,
    description,
    dimensions = {},
  } = painting;

  return (
    <div>
      <ArtDetails
        title={title}
        medium={medium}
        year={year}
        category={category}
        description={description}
        dimensions={dimensions}
      />
    </div>
  );
};

export default PaintingDetails;
