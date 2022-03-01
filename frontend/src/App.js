import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApplicationA from "./Components/ApplicationA";
import AddEmployee from "./Components/AddEmployee";
import UpdateAll from "./Components/UpdateAll";
import ApplicationB from "./Components/ApplicationB";
import UpdateAppB from "./Components/UpdateAppB";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appA" component={ApplicationA} />
          <Route exact path="/appB" component={ApplicationB} />
          <Route exact path="/emp_add" component={AddEmployee} />
          <Route exact path="/update/:id" component={UpdateAll} />
          <Route exact path="/update/appB/:id" component={UpdateAppB} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
