import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
