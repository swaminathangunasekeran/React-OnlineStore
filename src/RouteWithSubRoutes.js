import React from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function router(route) {
    return (
      <Route
        path={route.path}
        exact = {route.exact? true : false}
        render={props => 
          (
         
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }


  export default router;