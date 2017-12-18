import React from "react";
import Winner from "./Winner";

const getVotes = tally => entry => {
    if (tally && tally.has(entry)) {
        return tally.get(entry);
    }
    return 0;
};

const Results = ({ pair, tally, next, winner }) =>
    winner ? (
        <Winner winner={winner} />
    ) : (
        <div className="results">
            <div className="tally">
                {(pair || []).map(entry => (
                    <div key={entry} className="entry">
                        <h1>{entry}</h1>
                        <div className="voteCount">
                            {getVotes(tally)(entry)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="management">
                <button className="next" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );

export default Results;
