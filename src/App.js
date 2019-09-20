import React from "react";
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
import routes from "./routes"
import RouteWithSubRoutes from "./RouteWithSubRoutes"


function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/productDetails">ProductDetails</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul> */}

        <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}

         <Redirect from="/" to="/home" />
         </Switch>
      </div>
    
    </Router>
  );
}

export default App;
