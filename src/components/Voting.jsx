import React from "react";

export default class Voting extends React.Component {
    getPair = () => {
        return this.props.pair || [];
    };

    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry => (
                    <button key={entry}>
                        <h2>{entry}</h2>
                    </button>
                ))}
            </div>
        );
    }
}
