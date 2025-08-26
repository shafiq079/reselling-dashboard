import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GENVORA - SaaS Dashboard for UK Reselling Business",
  description: "Comprehensive SaaS dashboard for managing inventory, orders, expenses, ticket resales, and TCG investments. Built with modern React stack.",
  keywords: ["GENVORA", "SaaS", "Dashboard", "Inventory", "Orders", "eCommerce", "Reselling", "TCG", "Next.js", "TypeScript"],
  authors: [{ name: "GENVORA Team" }],
  openGraph: {
    title: "GENVORA - Business Operations Dashboard",
    description: "Comprehensive SaaS dashboard for UK reselling business operations",
    url: "https://genvora.co.uk",
    siteName: "GENVORA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GENVORA - Business Operations Dashboard",
    description: "Comprehensive SaaS dashboard for UK reselling business operations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
