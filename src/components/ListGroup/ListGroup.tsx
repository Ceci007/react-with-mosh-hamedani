import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="list-container">
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={selectedIndex === i ? "list-item active" : "list-item"}
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
