import React from "react";
import {Helmet} from "react-helmet";
import styled from "styled-components";

import {flex} from "../../helpers";
import {Content, Section, SectionContainer} from "../grid";

export const HomePage = () => (
  <Section>
    <Helmet>
      <title>Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Content>
        <P>
          Type a github user in the input above and hit Enter.
        </P>
      </Content>
    </SectionContainer>
  </Section>
);

const P = styled.p`
  ${flex.display()}
  ${flex.middle()}
  ${flex.center()}
  height: 50rem;
  border: .7rem dashed #eee;
  border-radius: .6rem;
  font-size: 1.4rem;
  letter-spacing: -.1px;
`;
