import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="/" aria-label="Amaro - Home">
          <svg width="100" height="70">
            <image href="image/logo_semfundo.webp" width="100" height="70" />
          </svg>
        </a>

        <a className={styles.login} href="/login">
          Login / Criar
        </a>
      </nav>
    </header>
  );
};

export default Header;
