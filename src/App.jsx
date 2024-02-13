import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './utils/ScrollToTop';
import Drawings from './pages/Drawings';

import Contact from './pages/Contact';
import Biography from './pages/Biography';
import Exhibitions from './pages/Exhibitions';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import Paintings from './pages/Paintings';
import PaintingDetails from './pages/PaintingDetails';
import DrawingDetails from './pages/DrawingDetails';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drawings" element={<Drawings />}></Route>
          <Route path="/drawings/:drawingId" element={<DrawingDetails />} />

          <Route path="/paintings" element={<Paintings />}></Route>
          <Route path="/paintings/:paintingId" element={<PaintingDetails />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
