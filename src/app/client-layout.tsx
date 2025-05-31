"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import SideCard from "@/components/SideCard";
import MovingGradientBg from "@/components/MovingGradientBg";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MovingGradientBg />
      <Header />
      <div className="flex mt-32 mb-10 mx-10">
        <aside className="w-2/6">
          <SideCard />
        </aside>
        <AnimatePresence mode="wait">
          <main className="w-4/6">{children}</main>
        </AnimatePresence>
      </div>
    </>
  );
}
