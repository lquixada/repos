import React from "react";

import {P} from "../grid";

interface IProps {
  text: string | undefined;
}

export const Description = ({text}: IProps) => (
  <P>{text}</P>
);
