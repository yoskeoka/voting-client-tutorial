import React from "react";
import { connect } from "react-redux";

import Voting from "../components/Voting";

function mapStateToProps(state) {
    return {
        pair: state.getIn(["vote", "pair"]),
        winner: state.get("winner"),
    };
}

export default connect(mapStateToProps)(Voting);
