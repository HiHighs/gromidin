import { useRef, useState } from 'react';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import Objective from '../Components/Objective/Objective';
import Footer from '../Components/Footer/Footer';
import styles from './Home.module.css';
import image from '../assets/drone_LQ_blurry.png';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const objectiveRef = useRef<HTMLDivElement>(null);

  function scrollToObjective() {
    if (objectiveRef.current)
      objectiveRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }

  return (
    <>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {!mobileMenuOpen && (
        <Header
          scrollToObjective={scrollToObjective}
          alignText='left'
          image={image}
        >
          <div className={styles.textContent}>
            <h1>
              <strong>GROMIDIN BV</strong> as a company
            </h1>
            <p>
              Because of the changing situation in European / Regional
              legislation for farming (The European Directive for sustainable
              use of pesticides) , growers will evolve to more{' '}
              <strong>digital support</strong> in their daily business.
            </p>
            <p>
              <strong>GROMIDIN</strong> wants to be a consulting, advising and
              training <strong>partner</strong> in this evolution for companies,
              distributors and farmers.
            </p>
            <p>
              <strong>Collaboration on distribution</strong> level in Belgium /
              NL / France / Germany / UK
            </p>
            <p>
              Contact us on +32 476 45 23 63 or via mail{' '}
              <a href='mailto:info@gromidin.com'>
                <strong>info@gromidin.com</strong>
              </a>
            </p>
          </div>
        </Header>
      )}
      {!mobileMenuOpen && <Objective ref={objectiveRef} />}
      {!mobileMenuOpen && <Footer />}
    </>
  );
}

export default Home;
