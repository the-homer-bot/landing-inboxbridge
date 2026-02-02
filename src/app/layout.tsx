import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InboxBridge - Don't Lose Your Unified Inbox",
  description: "Keep your Yahoo, Outlook, and AOL emails flowing into one inbox with spam protection and smart categories. The perfect Gmailify alternative.",
  keywords: ["Gmailify alternative", "email management", "unified inbox", "email bridge", "Yahoo mail Gmail", "Outlook Gmail"],
  openGraph: {
    title: "InboxBridge - Don't Lose Your Unified Inbox",
    description: "Keep your Yahoo, Outlook, and AOL emails flowing into one inbox with spam protection and smart categories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
