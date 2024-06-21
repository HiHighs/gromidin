import { useState } from 'react';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {!mobileMenuOpen && <Header />}
    </>
  );
}

export default Home;
