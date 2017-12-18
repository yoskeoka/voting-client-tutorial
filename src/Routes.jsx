import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Voting from "./components/Voting";
import Results from "./components/Results";
import NotFound from "./NotFound";

const AppVoting = () => (
    <App>
        <Voting />
    </App>
);

const AppResults = () => (
    <App>
        <div>hello from results!</div>
    </App>
);

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={AppVoting} />
            <Route path="/results" component={AppResults} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default Routes;
