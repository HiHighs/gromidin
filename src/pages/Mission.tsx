import { useEffect, useRef, useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import styles from './Mission.module.css';

import consulting from '../assets/mission/consulting.jpg';
import digital_farming_1 from '../assets/mission/digital_farming_1.jpg';
import digital_farming_2 from '../assets/mission/digital_farming_2.jpg';
import digital_farming_3 from '../assets/mission/digital_farming_3.jpg';
import digital_farming_4 from '../assets/mission/digital_farming_4.jpg';
import flanders from '../assets/mission/flanders.jpg';

function Mission() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Add state for active index
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollIntoView();
  }, []);

  const selectors = [
    'Consulting in Crop Protection',
    'Digital Farming',
    'Promotion of Digital Farming in Flanders',
  ];

  const parts = [
    {
      title: 'Consulting in Crop Protection',
      content: (
        <>
          <ul>
            <li>
              Expertise about <strong>portfoliomanagement</strong>
            </li>
            <li>
              Expertise on <strong>distribution knowledge</strong>
            </li>
          </ul>
          <img className={styles.img} src={consulting} />
        </>
      ),
    },
    {
      title: 'Digital Farming',
      content: (
        <>
          <ul>
            <li>
              Develop a <strong>Business model</strong> including the
              distribution
            </li>
            <li>
              Based on <strong>drone technology</strong> (collaboration with
              drone experts) with help of <strong>satellite-information</strong>
              <ul>
                <li>
                  Together with partners, we are convinced that{' '}
                  <strong>monitoring by drones</strong> will become a basis for
                  decision taking by contractor companies in spraying
                  applications and by farmers.
                </li>
                <li>
                  Focus is on <strong>immediate advising</strong> contractor
                  companies and distributors how to set up a business model.
                </li>
                <li>
                  Actually, with the partners, already a concept for monitoring
                  by drones is <strong>available</strong>!
                </li>
                <li>
                  Focus on: <strong>monitoring</strong> of weeds in different
                  crops, as well as diseases and insects like the Colorado
                  Beetle.
                </li>
                <li>
                  Fast delivery of "<strong>Job cards</strong>" (NL :
                  taakkaarten) possible after droneflight.
                </li>
              </ul>
            </li>
          </ul>

          <img className={styles.img} src={digital_farming_1} />
          <img className={styles.img} src={digital_farming_2} />
          <img className={styles.img} src={digital_farming_3} />
          <img className={styles.img} src={digital_farming_4} />
        </>
      ),
    },
    {
      title: 'Promotion of Digital Farming in Flanders',
      content: (
        <>
          <p>
            The aim is to indicate a series of methods to consider the various
            possibilities for digital farming in Flanders in a calm and
            constructive way. At the end of the day, every arable farmer or
            adviser in crop protection wants to be proud of their work, to have
            fun We are convinced that precision agriculture will give young,
            dynamic farmers and advisors extra pleasure in their work.
            <br />
            <br />
            What is thought about in the brain and daily thinking is translated
            into job satisfaction and extra engagement through support with
            tools The results can also be used to go to the outside world and
            show how the arable farmer is making rapid progress in terms of
            durable business. The enthusiasm for the company will grow! A
            parallel to “Digital Transformation” that is currently occurring at
            most top companies can certainly be found here
          </p>
          <img className={styles.img} src={flanders} />
        </>
      ),
    },
  ];

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {!mobileMenuOpen && (
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

            {selectors.map((text, index) => (
              <div
                key={index}
                className={`${styles.selector} ${
                  index === activeIndex ? styles.active : ''
                }`}
                onClick={() => setActiveIndex(index)} // Update active index on click
              >
                {text}
                {index === activeIndex && (
                  <div className={styles.checked}>✓</div>
                )}{' '}
                {/* Render checkmark if active */}
              </div>
            ))}

            <ol className={styles.parts}>
              {parts.map(
                (part, index) =>
                  index === activeIndex && (
                    <li key={index} className={styles.part}>
                      <h2>
                        <strong>{part.title}</strong>
                      </h2>
                      {part.content}
                    </li>
                  )
              )}
            </ol>
          </div>
        </div>
      )}

      {!mobileMenuOpen && <Footer />}
    </>
  );
}

export default Mission;
