import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useIconProps } from "hooks/useIconProps";
import styles from "./Footer.module.scss";

export default function Footer() {
  const iconProps = useIconProps();
  return (
    <footer className={styles.footer}>
      <div>
        <FacebookIcon {...iconProps} />
        <InstagramIcon {...iconProps} />
        <XIcon {...iconProps} />
      </div>
      <span>Desenvolvido por TioViga.</span>
    </footer>
  );
}
