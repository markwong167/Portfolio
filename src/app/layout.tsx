import type { Metadata } from "next";
import "../globals.css";
import AppShell from "./AppShell";
import FirebaseInit from "./FirebaseInit";

export const metadata: Metadata = {
  title: "Mark Wong's Portfolio",
  description: "Mark Wong's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body style={{ margin: 0 }}>
        <FirebaseInit />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
