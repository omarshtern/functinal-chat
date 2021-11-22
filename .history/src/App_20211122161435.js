import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Ro path='/app'></Ro>
            <Sidebar />
            <Chat />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
