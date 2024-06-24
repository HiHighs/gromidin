import { useRef, useState } from 'react';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import Objective from '../Components/Objective/Objective';
import Footer from '../Components/Footer/Footer';

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
      {!mobileMenuOpen && <Header scrollToObjective={scrollToObjective} />}
      {!mobileMenuOpen && <Objective ref={objectiveRef} />}
      {!mobileMenuOpen && <Footer />}
    </>
  );
}

export default Home;
