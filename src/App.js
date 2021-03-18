import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/singin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
