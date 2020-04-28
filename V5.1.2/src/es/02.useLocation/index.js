/**
 * useLocation功能
 * 2020.04.28 15:07
 */

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
} from "react-router-dom";

export default function () {
  return (
    <Router>
      <div>------------------useLocation-----------------------</div>
      <div>
        <Link to={{ pathname: "/orange/13", state: { name: "adai", age: 22 } }}>
          橘子
        </Link>
        <Link to={{ pathname: "/pear/14", state: { name: "adai", age: 22 } }}>
          梨子
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/orange/:id" component={Orange}></Route>
        <Route path="/pear/:id" component={Pear}></Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <div>this is home</div>;
}

// V5.1.2
function Orange() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  /* 
    {
      pathname: "/orange/13"
      state: {name: "adai", age: 22}
      search: ""
      hash: ""
      key: "rj2d34"
    }
  */
  return <div>this is orange, id: {id}</div>;
}
// < V5.1.2
function Pear(props) {
  const { id } = useParams();
  const location = props.location;
  console.log(location);
  return <div>this is pear ,id: {id}</div>;
}
