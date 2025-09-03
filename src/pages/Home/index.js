import jogo from "assets/inicial.png";
import Header from "components/Header";
import styles from "./Home.module.scss";
export default function HomePage() {
  return (
    <div>
      <Header
        titulo="Promoções"
        descricao="Compre diversos jogos das mais variadas plataformas"
        imagem={jogo}
        className={styles.header}
      />
    </div>
  );
}
