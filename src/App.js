import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Todos from "./components/Todos";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Todos />
      <Timer/>
      <Stopwatch/>
    </div>
  );
}

export default App;
