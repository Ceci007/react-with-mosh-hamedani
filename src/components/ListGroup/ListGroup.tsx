import { useState } from "react";
import "./ListGroup.css";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="list-container">
      <h1>List</h1>
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
