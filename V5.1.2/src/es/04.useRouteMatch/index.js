/**
 * useLocation功能
 * 2020.04.28 16:06
 */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

export default function (props) {
  return (
    <Router>
      <div>------------------useRouteMatch-----------------------</div>
      <Switch>
        {/* <Route path="/" component={Home}></Route> */}
        <Route path="/" component={Home2}></Route>
      </Switch>
    </Router>
  );
}
/* < V5.1.2 */
function Home(props) {
  return (
    <Route
      path="/watermelon"
      exact
      render={({ match }) => <div>this is watermelon</div>}
    ></Route>
  );
}
/* V5.1.2 */
function Home2() {
  const match = useRouteMatch({ path: "/watermelon", exact: true });
  console.log(match);
  return <div>{match && "this is watermelon"}</div>;
}
