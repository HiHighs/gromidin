import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import image from '../assets/contact.jpg';
import styles from './Contact.module.css';
import ContactInfo from '../Components/ContactInfo/ContactInfo';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';

function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {!mobileMenuOpen && (
        <Header image={image} alignText='center'>
          <div className={styles.textContent}>
            <h2>Contact Us</h2>
            <h1>Get In Touch</h1>
          </div>
        </Header>
      )}

      {!mobileMenuOpen && <ContactInfo />}
      {!mobileMenuOpen && <ContactForm />}
      {!mobileMenuOpen && <Footer />}
    </>
  );
}

export default Contact;
