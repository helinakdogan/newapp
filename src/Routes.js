import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch, BrowserRouter, ContentRoute } from "react-router-dom";
import {} from "react-browser-router";

function Routes() {
    
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ContentRoute
            exact
            path="/home"
            component={() => {
              return <MuhatapView key={"tahsilat"} />;
            }
            breadcrumbs={[
              {
                title: "Content",
                path: "/content",
                detay: false,
              },
              {
                title: "Menu",
                path: "/menu",
                detay: false,
              },
              {
                title: "Option1",
                path: "/menu/option1",
                detay: false,
              },
              {
                title: "Option2",
                path: "/menu/option2",
                detay: false,
              },
            ]}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
