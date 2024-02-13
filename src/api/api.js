import url from '../data/data.json';

const artworks = url.artworks;
const videoArtworks = url.videoArtworks;

if (!artworks || !videoArtworks) {
  throw new Error('Failed to fetch data');
}

export const getAllArtworks = async () => {
  return artworks;
};

export const getAllPaintings = async () => {
  const allPaintings = artworks.filter(
    (artwork) => artwork.category === 'Painting',
  );
  return allPaintings;
};

export const getAllDrawings = async () => {
  const allDrawings = artworks.filter(
    (artwork) => artwork.category === 'Drawing',
  );
  return allDrawings;
};

export const getArtwork = async (id) => {
  const artwork = artworks.find((artwork) => artwork.id === parseInt(id));
  return artwork;
};

export const getVideoArtwork = async (id) => {
  const videoArtwork = videoArtworks.find(
    (videoArtwork) => videoArtwork.id === parseInt(id),
  );
  return videoArtwork;
};
