import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Mission from './pages/Mission';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename='/gromidin'>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
