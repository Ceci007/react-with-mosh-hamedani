import "./ListGroup.css";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <div className="list-container">
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li className="list-item" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
