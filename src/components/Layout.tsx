import React, { ReactNode, ReactNodeArray } from "react";
import { Container } from "reactstrap";
import Header from './Header'

interface LayoutProps {
  children: ReactNode | ReactNodeArray;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <Container className="mt-4">{children}</Container>
    </div>
  );
}

export default Layout;
