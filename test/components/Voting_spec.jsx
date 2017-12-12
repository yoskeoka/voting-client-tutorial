import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import Voting from "../../src/components/Voting";

describe("Voting", () => {
    it("renders a pair of buttons", () => {
        const wrapper = shallow(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );

        const buttons = wrapper.find("button");
        expect(buttons.length).to.equal(2);
        expect(buttons.at(0).text()).to.equal("Trainspotting");
        expect(buttons.at(1).text()).to.equal("28 Days Later");
    });

    it("invokes callback when a button is clicked", () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(
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
});
