import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
