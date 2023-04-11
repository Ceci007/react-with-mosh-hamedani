import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
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
