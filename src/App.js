import { useState } from "react";
import useApi from "./api";
import "./App.css";
import Masthead from "./Components/Masthead/Masthead";
import Panel from "./Components/Panel/Panel";
import Button from "./Components/Button/Button";

const App = () => {
  const { fetchApi, isPending, error } = useApi();
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Masthead />
      <header className="App-header">
        <h2>Welcome</h2>
      </header>
      <div className="app-body">
        <Panel title="TODO List" />
        <Button onClick={() => fetchApi("/api/hw").then(setData)}>
          TESTING
        </Button>
        <span>
          {isPending
            ? "PENDING"
            : data
            ? data.message
            : error
            ? error.message
            : "No Data Yet"}
        </span>
      </div>
    </div>
  );
};

export default App;
