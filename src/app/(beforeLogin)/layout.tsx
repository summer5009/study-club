import { ReactNode } from "react";

export default function Layout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <div>
      Before Login 레이아웃
      {children}
      {modal}
    </div>
  );
}
