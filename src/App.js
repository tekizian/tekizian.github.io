import useFetch from "./api";
import "./App.css";
import Panel from "./Components/Panel/Panel";

function App() {
  const { data, isPending, error, fetchData } = useFetch();
  return (
    <div className="App">
      <button onClick={() => fetchData("/api/hw")}>TESTING</button>
      <span>{isPending ? "PENDING" : data ? data.message : "No Data Yet"}</span>
      <header className="App-header">
        <Panel title="Sample Panel" details={["TEST", "test"]}></Panel>
      </header>
    </div>
  );
}

export default App;
