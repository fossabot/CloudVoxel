import type { Metadata } from "next";
import clientconfig from "@/../clientconfig";

export const metadata: Metadata = {
  title: clientconfig.websiteName,
  description: clientconfig.websiteDescription,
  icons: {
    other: { url: '/images/icon.png' },
    icon: '/images/favicon.ico',
    apple: '/images/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
