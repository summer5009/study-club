import React, { ReactNode } from "react";
import RQProvider from "./_components/RQProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <div>
        After Layout 레이아웃
        {children}
      </div>
    </RQProvider>
  );
}
