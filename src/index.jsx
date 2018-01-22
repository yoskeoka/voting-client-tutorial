import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import io from "socket.io-client";

import remoteActionMiddleware from "./remote_action_middleware";
import reducer from "./reducer";
import { setState } from "./action_creators";
import Routes from "./Routes";

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on("state", state => store.dispatch(setState(state)));

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

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
