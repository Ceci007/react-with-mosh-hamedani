import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className={styles["list-container"]}>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={styles["list-group"]}>
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i
                ? `${styles["list-item"]} ${styles["active"]}`
                : styles["list-item"]
            }
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
