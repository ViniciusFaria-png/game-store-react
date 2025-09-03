import styles from "./Header.module.scss";

export default function Header({ titulo, descricao, className = "", imagem }) {
  return (
    <header className={styles.header}>
      <div className={styles["header-texto"]}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img alt={titulo} src={imagem}></img>
      </div>
    </header>
  );
}
