import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={`${styles["btn"]} ${styles["btn-" + color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
