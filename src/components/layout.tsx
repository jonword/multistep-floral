import React from "react";
import type { ReactElement } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
