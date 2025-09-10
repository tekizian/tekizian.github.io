import { useState } from "react";
import useApi from "./api";
import "./App.css";
import Masthead from "./Components/Masthead/Masthead";
import Panel from "./Components/Panel/Panel";

const App = () => {
  const { fetchApi, isPending, error } = useApi();
  const [data, setData] = useState(null);
  const defaultDetails = [
    "Integrate with Auth0",
    "Create a secure endpoint",
    "Connect Server to database",
  ];
  return (
    <div className="App">
      <Masthead />
      <header className="App-header">
        <Panel title="TODO List" details={[]}></Panel>
        <button onClick={() => fetchApi("/api/hw").then(setData)}>
          TESTING
        </button>
        <span>
          {isPending
            ? "PENDING"
            : data
            ? data.message
            : error
            ? error.message
            : "No Data Yet"}
        </span>
      </header>
    </div>
  );
};

export default App;
