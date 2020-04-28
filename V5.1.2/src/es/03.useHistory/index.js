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
} from "react-router-dom";

export default function (props) {
  return (
    <Router>
      <div>------------------useHistory-----------------------</div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/grapes" component={Grapes}></Route>
      </Switch>
    </Router>
  );
}
/* < V5.1.2 */
function Home(props) {
  const history = props.history;
  console.log("<", history);
  return (
    <div>
      <button onClick={() => history.push("/grapes")}>去吃葡萄</button>
    </div>
  );
}
/* V5.1.2 */
function Grapes() {
  const history = useHistory();
  console.log("=", history);
  return (
    <div>
      吃完葡萄了，<button onClick={() => history.goBack()}>返回</button>
    </div>
  );
}
