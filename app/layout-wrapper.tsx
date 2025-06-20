"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/web/Header";
import Footer from "@/components/web/Footer";
import { Toaster } from "sonner";

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  // Modified line to hide nav and footer for /dashboard and all its sub-routes
  const hideNavAndFooter =
    pathname.startsWith("/dashboard") ||
    pathname === "/login" ||
    pathname === "/register";

  return (
    <SessionProvider>
      {!hideNavAndFooter && <Header />}
      {children}
      {!hideNavAndFooter && <Footer />}
      <Toaster />
    </SessionProvider>
  );
};

export default LayoutWrapper;
