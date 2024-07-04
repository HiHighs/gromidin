import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './About.module.css';
import Footer from '../Components/Footer/Footer';

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Objectives of the company : - Give consulting on marketing and go to
            market strategy on crop protection level - Including potential
            interaction between agriculture and drone technology : “Drone
            Technology in Agriculture” Experiences : - 40 years in the
            agricultural crop protection business (BASF and Globachem) resulting
            in o A global view on crop protection on marketing and sales level.
            o Good knowledge of the Belgian, but also European crop protection
            market, including distribution strategy. o Strategic planning in
            crop protection. o A strong knowledge about different active
            ingredients. o Adding a human factor : bring young people to a high
            level of knowledge in the crop protection business. o Experience in
            negotiation techniques . - Intention to explore new ways of
            monitoring the use of crop protection products over “Drone
            Technology in Agriculture”.
          </p>
        </div>
      </div>

      {!mobileMenuOpen && <Footer color='dark' />}
    </div>
  );
}

export default About;
