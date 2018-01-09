import React from "react";
import { List, Map } from "immutable";

export default class App extends React.Component {
    render() {
        // pass props to children
        const { children } = this.props;
        return children;
    }
}
