import jogo from "assets/inicial.png";
import Header from "components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categorias);
  return (
    <div>
      <div>
        <Header
          titulo="Promoções"
          descricao="Compre diversos jogos das mais variadas plataformas"
          imagem={jogo}
          className={styles.header}
        />
      </div>
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1> Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome}></img>
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
