import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles["container-outlet"]}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
