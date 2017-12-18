import React from "react";
import { List, Map } from "immutable";

const pair = List.of("Trainspotting", "28 Days Later");
const tally = Map({ Trainspotting: 5, "28 Days Later": 4 });

export default class App extends React.Component {
    render() {
        // pass props to children
        const { children } = this.props;
        return React.Children.map(children, child =>
            React.cloneElement(child, { pair, tally })
        );
    }
}
