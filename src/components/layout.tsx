import { type ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar prefix="pages-dir" />
      <main className="py-16">{children}</main>
      <Footer />
    </>
  );
};
