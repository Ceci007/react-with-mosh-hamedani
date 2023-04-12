import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "danger" | "success";
  onClose: () => void;
}

const Alert = ({ children, onClose, color = "primary" }: Props) => {
  return (
    <div className={`${styles["alert"]} ${styles["alert-" + color]}`}>
      {children}
      <button type="button" className={styles["btn-close"]} onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Alert;
