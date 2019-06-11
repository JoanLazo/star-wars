import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import App from "../App";
import InfoCharacter from "./InfoCharacter";

const Router = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App} exact />
        {/* <Route path="/descripción" component={InfoCharacter} /> */}
    </HashRouter>
);

    
export default Router;