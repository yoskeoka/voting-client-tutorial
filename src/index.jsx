import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import io from "socket.io-client";

import reducer from "./reducer";
import Routes from "./Routes";

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on("state", state => store.dispatch({ type: "SET_STATE", state }));

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById("app")
    );
};

render(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./App", () => {
        render(Routes);
    });
}
