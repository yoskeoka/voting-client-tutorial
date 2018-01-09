import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Voting from "./containers/Voting";
import Results from "./containers/Results";
import NotFound from "./NotFound";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Voting} />
            <Route path="/results" component={Results} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default Routes;
