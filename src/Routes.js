import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import Whiteboard from './pages/whiteboard/ui/Container';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import LandingPage from "./pages/landing/home";
import Terms from "./pages/landing/tac";
import Privacy from "./pages/landing/privacy";
import Partnerships from "./pages/landing/partnerships";
import FAQs from "./pages/landing/faqs";
import './App.css';

const PrivateRoute = ({ requireAuth = true, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {requireAuth ? (
        user ? (
          rest.children
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      ) : (
        rest.children
      )}
    </Route>
  );
};

export function Routes() {
  return (
    <Switch>
      <PrivateRoute requireAuth={false} path="/login" component={Login} />
      <PrivateRoute requireAuth={false} path="/register" component={Register} />
      {/*<PrivateRoute requireAuth={true} path="/home" component={Home} />*/}
      <PrivateRoute requireAuth={false} path="/messenger" component={Messenger} />
      <PrivateRoute requireAuth={false} path="/whiteboard" component={Whiteboard} />
      {/*<PrivateRoute requireAuth={true} path="/profile/:username" component={Profile} />*/}
      <Route path='/' exact component={LandingPage} />
      <Route path='/' exact component={Messenger} />
      <Route path='/tac' exact component={Terms} />
      <Route path='/privacy' exact component={Privacy} />
      <Route path='/partnerships' exact component={Partnerships} />
      <Route path='/faqs' exact component={FAQs} />
    </Switch>
  );
}