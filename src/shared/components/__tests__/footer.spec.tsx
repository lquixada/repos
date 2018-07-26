import {shallow} from "enzyme";
import React from "react";

import {Footer} from "../footer";

describe("<Footer />", () => {
  it("matches the snapshot", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
