import { ReactNode } from "react";
import "./Alert.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button type="button" className="btn-close" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Alert;
