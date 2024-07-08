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

      {!mobileMenuOpen && (
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Objectives of the Company</h2>
            <ul>
              <li>
                Give <strong>consulting</strong> on marketing and go to market
                strategy on crop protection level
              </li>
              <li>
                Including potential interaction between agriculture and drone
                technology: <strong>Drone Technology in Agriculture</strong>
              </li>
            </ul>

            <h2>Experiences</h2>
            <ul>
              <li>
                40 years in the agricultural crop protection business (
                <strong>BASF</strong> and <strong>Globachem</strong>) resulting
                in
                <ul>
                  <li>
                    A global view on crop protection on marketing and sales
                    level.
                  </li>
                  <li>
                    Good knowledge of the Belgian, but also European crop
                    protection market, including distribution strategy.
                  </li>
                  <li>Strategic planning in crop protection.</li>
                  <li>
                    A strong knowledge about different active ingredients.
                  </li>
                  <li>
                    Adding a human factor: bring young people to a high level of
                    knowledge in the crop protection business.
                  </li>
                  <li>Experience in negotiation techniques.</li>
                </ul>
              </li>
              <li>
                Intention to explore new ways of monitoring the use of crop
                protection products over{' '}
                <strong>Drone Technology in Agriculture</strong>.
              </li>
            </ul>
          </div>
        </div>
      )}

      {!mobileMenuOpen && <Footer color='dark' />}
    </div>
  );
}

export default About;
