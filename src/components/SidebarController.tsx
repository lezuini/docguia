"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { checkAuth } from "@/lib/api";
import { useRouter } from "next/navigation";

export const SidebarController = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await checkAuth();

      if (!response.isLoggedIn) {
        router.push("/login");
      }
    })();
  }, [router]);

  return (
    <div className="min-h-screen flex w-full bg-gray-50 relative">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col w-full">
        <Header setIsOpen={setIsOpen} />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};
