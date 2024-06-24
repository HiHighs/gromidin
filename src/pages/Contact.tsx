import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';

function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
