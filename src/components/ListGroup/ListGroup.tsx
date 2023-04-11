import { MouseEvent } from "react";
import "./ListGroup.css";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <div className="list-container">
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li className="list-item" key={i} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
