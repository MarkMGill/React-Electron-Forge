import { Routes } from './Routes';
import {
  Router, Switch, Route
} from "react-router-dom";
import { createBrowserHistory, createHashHistory } from 'history';
import { isElectron } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';

//export const history = isElectron()
  //? createHashHistory()
  //: createBrowserHistory();

  export const history = createHashHistory();
  //export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;

