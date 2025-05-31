"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import SideCard from "@/components/SideCard";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex mt-32">
        <aside className="w-2/6">
          <SideCard/>
        </aside>
        <AnimatePresence mode="wait">
          <main className="">{children}</main>
        </AnimatePresence>
      </div>
    </>
  );
}
