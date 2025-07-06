import { SidebarController } from "@/components/SidebarController";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarController>{children}</SidebarController>;
}
