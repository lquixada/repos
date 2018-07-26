import {shallow} from "enzyme";
import React from "react";

import {AboutPage} from "../about";

describe("<AboutPage />", () => {
  it("matches the snapshot", () => {
    const component = shallow(<AboutPage />);
    expect(component).toMatchSnapshot();
  });
});
