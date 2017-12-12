import React from "react";
import classNames from "classnames";

const Vote = ({ pair, vote, hasVoted }) => {
    return (pair || []).map(entry => (
        <button
            className={classNames({
                voted: hasVoted === entry,
            })}
            key={entry}
            onClick={() => vote(entry)}
            disabled={!!hasVoted}
        >
            <h1>{entry}</h1>
            {hasVoted === entry ? <div className="label">Voted</div> : null}
        </button>
    ));
};

export default Vote;
