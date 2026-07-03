import type { Metadata } from "next";
import { AdminDashboardClient } from "./AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "OpenUI Hub admin dashboard for managing components, contributors, and categories.",
};

export default function AdminPage() {
  return <AdminDashboardClient />;
}
