import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {imgUrl} from "../helpers";

export const Title = () => (
  <Wrapper>
    <NavLink to="/">
      <Image src={imgUrl("logo.png")} />
    </NavLink>
  </Wrapper>
);

const Wrapper = styled.h1`
  line-height: 1;

  &::after {
    content: "/";
    margin: 0 5px;
    color: #b9b9b9;
    font-family: 'Lato', Helvetica, sans-serif;
    font-size: 25px;
    font-weight: normal;
    vertical-align: middle;
  }
`;

const NavLink = styled(Link).attrs({
  "aria-label": "Homepage",
})`
  display: inline-block;
  height: 30px;
  vertical-align: middle;
  text-decoration: none;
`;

const Image = styled.img.attrs({
  alt: "Github Repos logo",
})`
  display: inline-block;
  width: 158px;
  height: 100%;
`;
