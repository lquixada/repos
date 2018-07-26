import {shallow} from "enzyme";
import React from "react";

import {Title} from "../title";

describe("<Title />", () => {
  it("matches the snapshot", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
