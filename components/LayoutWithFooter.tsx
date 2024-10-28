// LayoutWithFooter.tsx
"use client";

import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import React from "react";

const LayoutWithFooter = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showFooter = pathname !== "/waitinglist";

  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default LayoutWithFooter;
