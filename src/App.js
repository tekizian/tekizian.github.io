import fetchData from "./api";
import "./App.css";
import Panel from "./Components/Panel/Panel";

function App() {
  return (
    <div className="App">
      <button onClick={() => fetchData("/api/hw")}>TESTING</button>
      <header className="App-header">
        <Panel title="Sample Panel" details={["TEST", "test"]}></Panel>
      </header>
    </div>
  );
}

export default App;
