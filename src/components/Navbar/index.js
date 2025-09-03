import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classNames from "classnames";
import { useIconProps } from "hooks/useIconProps";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Busca from "../Busca/index";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const iconProps = useIconProps();

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === "/",
            })}
          >
            Pagina Inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <AddShoppingCartIcon {...iconProps} />
          ) : (
            <ShoppingCartIcon {...iconProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
