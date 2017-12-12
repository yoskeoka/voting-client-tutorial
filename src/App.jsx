import React from "react";
const pair = ["Trainspotting", "28 Days Later"];

import Voting from "./components/Voting";

export default class App extends React.Component {
    render() {
        return <Voting pair={pair} />;
    }
}
