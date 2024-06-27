import { useRef, useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import image from '../assets/contact.jpg';
import styles from './Contact.module.css';
import ContactInfo from '../Components/ContactInfo/ContactInfo';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';
// import Map from '../Components/Map/Map';
import MapLeaf from '../Components/Map/Map';

function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  function scrollToContactInfo() {
    if (contactInfoRef.current) {
      contactInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {!mobileMenuOpen && (
        <Header image={image} alignText='center'>
          <div className={styles.textContent}>
            <h2 onClick={scrollToContactInfo}>Contact Us</h2>
            <h1>Get In Touch</h1>
          </div>
        </Header>
      )}

      {!mobileMenuOpen && (
        <div ref={contactInfoRef}>
          <ContactInfo />
        </div>
      )}
      {!mobileMenuOpen && <ContactForm />}
      {!mobileMenuOpen && <MapLeaf address='Bergenstraat 158, 3052 Blanden' />}
      {!mobileMenuOpen && <Footer />}
    </>
  );
}

export default Contact;
