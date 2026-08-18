import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sans = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  fallback: ["system-ui"],
});

export const metadata: Metadata = {
  title: "StrideLabs",
  description:
    "A digital product studio engineering interfaces, systems, and experiences that create measurable momentum for ambitious brands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        sans.variable,
        "h-full antialiased scroll-smooth scroll-p-16",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
