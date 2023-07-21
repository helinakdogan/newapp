import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import ContentRoute from "./ContentRoute";
import Content1 from "./components/contents/Content1";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ContentRoute
            exact
            path="/home"
            component={Content1}
            yetkiVarMi={true}
            breadcrumbs={[
              {
                title: "Anasayfa",
                path: "/anasayfa",
                detay: false,
              }
            ]}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
