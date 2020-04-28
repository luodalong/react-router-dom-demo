/**
 * useParams功能
 * 2020.04.28 10:50
 */

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

export default function () {
  return (
    <Router>
      <div>------------------useParams-----------------------</div>
      <div>
        <Link to="/apple/12/adai">苹果</Link>
        <Link to="/banana/11">香蕉</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/apple/:id/:name" component={Apple}></Route>
        <Route path="/banana/:id" component={Banana}></Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <div>this is home</div>;
}

/* V5.1.2 useParams */
function Apple() {
  const { id, name } = useParams(); // 12
  console.log(id, name);
  return <div>this is apple, id: {id}</div>;
}

/* <V5.1.2 */
function Banana(props) {
  const id = props.match.params.id; // 11
  return <div>this is banana， id: {id}</div>;
}
