import styles from './HeaderImage.module.css';

function HeaderImage({ image }: { image: string }) {
  return (
    <div
      className={styles.image}
      style={{
        background: `url(${image}) no-repeat center center / cover`,
      }}
    ></div>
  );
}

export default HeaderImage;
