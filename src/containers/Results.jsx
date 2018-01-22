import React from "react";
import { connect } from "react-redux";

import Results from "../components/Results";
import * as actionCreators from "../action_creators";

function mapStateToProps(state) {
    return {
        pair: state.getIn(["vote", "pair"]),
        tally: state.getIn(["vote", "tally"]),
        winner: state.get("winner"),
    };
}

export default connect(mapStateToProps, actionCreators)(Results);
