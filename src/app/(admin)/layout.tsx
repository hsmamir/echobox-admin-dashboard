"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  /**
   * RTL logic:
   * Sidebar is on the RIGHT
   * So margins must be mr-* instead of ml-*
   */
  const mainContentMargin = isMobileOpen
    ? "mr-0"
    : isExpanded || isHovered
      ? "lg:mr-[290px]"
      : "lg:mr-[90px]";

  return (
    <div className="min-h-screen xl:flex xl:flex-row-reverse">
      {/* Sidebar (Right) */}
      <AppSidebar />
      <Backdrop />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />

        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
