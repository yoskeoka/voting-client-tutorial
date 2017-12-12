import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiImmutable from "chai-immutable";
import chaiEnzyme from "chai-enzyme";

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme()); // Note the invocation at the end
chai.use(chaiImmutable);
