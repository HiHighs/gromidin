import { useEffect, useRef, useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Mission.module.css';
import Footer from '../Components/Footer/Footer';

function Mission() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollIntoView();
  });

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div ref={containerRef} className={styles.container}>
        <h1>Mission</h1>

        <div>
          <p>Gromidin wants to:</p>
          <ul className={styles.goals}>
            <li>
              Be a <strong>consulting</strong> partner for R&D / Regulatory
              companies
            </li>
            <li>
              Be an <strong>advising</strong> partner for Distributors
            </li>
            <li>
              Be a <strong>training</strong> partner for farmers
            </li>
          </ul>
          <p>... with focus on 3 parts:</p>

          <ol className={styles.parts}>
            <li className={styles.part}>
              <h2>
                1. <strong>Consulting</strong> in Crop Protection
              </h2>
              <ul>
                <li>
                  Expertise about <strong>portfoliomanagement</strong>
                </li>
                <li>
                  Expertise on <strong>distribution knowledge</strong>
                </li>
              </ul>
            </li>

            <li className={styles.part}>
              <h2>
                2. <strong>Digital</strong> Farming
              </h2>
              <ul>
                <li>
                  Develop a <strong>Business model</strong> including the
                  distribution
                </li>
                <li>
                  Based on <strong>drone technology</strong> (collaboration with
                  drone experts) with help of{' '}
                  <strong>satellite-information</strong>
                  <ul>
                    <li>
                      Together with partners, we are convinced that{' '}
                      <strong>monitoring by drones</strong> will become a basis
                      for decision taking by contractor companies in spraying
                      applications and by farmers.
                    </li>
                    <li>
                      Focus is on <strong>immediate advising</strong> contractor
                      companies and distributors how to set up a business model.
                    </li>
                    <li>
                      Actually, with the partners, already a concept for
                      monitoring by drones is <strong>available</strong>!
                    </li>
                    <li>
                      Focus on: <strong>monitoring</strong> of weeds in
                      different crops, as well as diseases and insects like the
                      Colorado Beetle.
                    </li>
                    <li>
                      Fast delivery of "<strong>Job cards</strong>" (NL :
                      taakkaarten) possible after droneflight.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={styles.part}>
              <h2>
                3. Promotion of <strong>Digital Farming</strong> in Flanders
                (Belgium)
              </h2>
              <p>
                The aim is to indicate a series of methods to consider the
                various possibilities for digital farming in Flanders in a calm
                and constructive way. At the end of the day, every arable farmer
                or adviser in crop protection wants to be proud of their work,
                to have fun We are convinced that precision agriculture will
                give young, dynamic farmers and advisors extra pleasure in their
                work.
              </p>
              <p>
                What is thought about in the brain and daily thinking is
                translated into job satisfaction and extra engagement through
                support with tools The results can also be used to go to the
                outside world and show how the arable farmer is making rapid
                progress in terms of durable business. The enthusiasm for the
                company will grow! A parallel to “Digital Transformation” that
                is currently occurring at most top companies can certainly be
                found here
              </p>
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Mission;
