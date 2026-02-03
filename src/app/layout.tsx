import type { Metadata } from "next";
import "./globals.css";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";

export const metadata: Metadata = {
  title: "Lashiya",
  description:
    "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalAudioPlayer />
        {children}
      </body>
    </html>
  );
}

