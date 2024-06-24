import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <h1>About</h1>
    </div>
  );
}

export default About;
