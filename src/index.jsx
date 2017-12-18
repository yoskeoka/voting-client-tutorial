import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import Routes from "./Routes";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
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
