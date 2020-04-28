import React from "react";
import { UseParams, UseLocation, UseHistory, UseRouteMatch } from "./es/index";

export default function () {
  return (
    <div>
      <UseParams></UseParams>
      <UseLocation></UseLocation>
      <UseHistory></UseHistory>
      <UseRouteMatch></UseRouteMatch>
    </div>
  );
}
