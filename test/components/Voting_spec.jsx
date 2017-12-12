import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import Voting from "../../src/components/Voting";

describe("Vote", () => {
    it("renders a pair of buttons", () => {
        const wrapper = mount(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );

        const buttons = wrapper.find("button");
        expect(buttons.length).to.equal(2);
        expect(buttons.at(0).text()).to.equal("Trainspotting");
        expect(buttons.at(1).text()).to.equal("28 Days Later");
    });

    it("invokes callback when a button is clicked", () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                vote={onButtonClick}
            />
        );
        wrapper
            .find("button")
            .at(0)
            .simulate("click");
        expect(onButtonClick.calledOnce).to.equal(true);
    });

    it("disables buttons when user has voted", () => {
        const wrapper = mount(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                hasVoted="Trainspotting"
            />
        );
        const buttons = wrapper.find("button");
        expect(buttons.length).to.equal(2);

        expect(buttons.at(0)).to.have.attr("disabled");
        expect(buttons.at(1)).to.have.attr("disabled");
    });

    it("adds label to the voted entry", () => {
        const wrapper = mount(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                hasVoted="Trainspotting"
            />
        );
        const buttons = wrapper.find("button");

        expect(buttons.at(0)).to.contain.text("Voted");
    });

    it("renders just the winner when there is one", () => {
        const wrapper = mount(<Voting winner="Trainspotting" />);
        const buttons = wrapper.find("button");
        expect(buttons.length).to.equal(0);

        const winner = wrapper.find(".winner");
        expect(winner).to.be.ok;
        expect(winner).to.contain.text("Trainspotting");
    });
});
