import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import reducer from "./reducer";
import Routes from "./Routes";

const store = createStore(reducer);

// test data
store.dispatch({
    type: "SET_STATE",
    state: {
        vote: {
            pair: ["Sunshine", "28 Days Later"],
            tally: { Sunshine: 2 },
        },
    },
});

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
