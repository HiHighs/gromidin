import styles from './ScrollDown.module.css';
import downArrow from '../../assets/down-arrow.svg';

function ScrollDown() {
  return (
    <div className={styles.scrollDown}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={downArrow} alt='Scroll Down' />
      </div>
    </div>
  );
}

export default ScrollDown;
