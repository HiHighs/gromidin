import { CSSProperties, ReactNode } from 'react';
import HeaderImage from '../HeaderImage/HeaderImage';
import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './Header.module.css';

interface HeaderProps {
  scrollToObjective?: { (): void };
  image: string;
  alignText: CSSProperties['textAlign'];
  children: ReactNode;
}

function Header({
  scrollToObjective,
  image,
  alignText = 'center',
  children,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <HeaderImage image={image} />

      <div className={styles.content} style={{ textAlign: alignText }}>
        {children}
      </div>

      {scrollToObjective && (
        <ScrollDown scrollToObjective={scrollToObjective} />
      )}
    </header>
  );
}

export default Header;
