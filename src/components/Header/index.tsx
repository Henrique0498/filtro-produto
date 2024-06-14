import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="/" aria-label="Amaro - Home">
          <img
            src="https://raw.githubusercontent.com/Henrique0498/Henrique0498/e297ec588fdbf835ce51e5ef7035bde86ee3b480/img/Logo.svg"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </a>

        <a className={styles.login} href="/login">
          Login / Criar
        </a>
      </nav>
    </header>
  );
};

export default Header;
