import { ReactNode } from "react";
import { Web3Provider } from "./components/Web3Provider";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Web3Provider>{children}</Web3Provider>;
}
