"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <main className="pt-16">{children}</main>
      </AnimatePresence>
    </>
  );
}
