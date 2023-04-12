import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Press me</Button>
    </div>
  );
}

export default App;
