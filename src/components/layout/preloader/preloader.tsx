import styles from "./preloader.module.css";

function Preloader(): React.JSX.Element {
  return (
    <div className={styles.preloader__container}>
      <div className={styles.preloader}></div>
    </div>
  );
}

export default Preloader;
