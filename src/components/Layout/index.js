import React from "react";

import "../../css/style.css";
import { Navbar } from "..";

export const Layout = ({ children, ...rest }) => (
  <>
    <Navbar {...rest} />
    {children}
  </>
);
