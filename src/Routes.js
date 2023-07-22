import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ContentRoute from "./ContentRoute";
import Content1 from "./components/contents/Content1";
import Content2 from "./components/contents/Content2";

function Routes() {
  return (
    <>


    
      <BrowserRouter>
        <Switch>
          <ContentRoute 
            exact 
            path="/content1"
            component={Content1}
            yetkiVarMi={true}
          />
          <ContentRoute 
            exact 
            path="/content2"
            component={Content2}
            yetkiVarMi={true}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
