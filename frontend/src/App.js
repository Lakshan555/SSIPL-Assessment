import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApplicationA from "./Components/ApplicationA";
import AddEmployee from "./Components/AddEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appA" component={ApplicationA} />
          <Route exact path="/emp_add" component={AddEmployee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
