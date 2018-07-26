import React from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";
import styled from "styled-components";

import config from "../config";
import {phones} from "../helpers";

export const Ribbon = () => (
  <ForkRibbon href={config.appUrl} position="right" color="orange">
    Fork me on GitHub
  </ForkRibbon>
);

const ForkRibbon = styled(GitHubForkRibbon)`
  @media (${phones}) {
    display: none;
  }
`;
