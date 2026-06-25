import type { Metadata } from "next";
import { geistSans, geistMono, inter } from "@/lib/fonts";
import { SmoothScrollProvider }  from "@/components/providers/SmoothScrollProvider";
import { MotionProvider }        from "@/components/providers/MotionProvider";
import { Atmosphere }   from "@/components/Atmosphere";
import { MouseGlow }    from "@/components/MouseGlow";
import { ProgressBar }  from "@/components/ProgressBar";
import { Navbar }       from "@/components/Navbar";
import { AmbientPlayer } from "@/components/AmbientPlayer";
import { SiteFooter }   from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:  "Suhaib Khan",
    template: "%s · Suhaib Khan",
  },
  description:
    "Engineer, builder and systems thinker. Exploring AI, markets and how enduring things are made.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body className="bg-background text-foreground font-body antialiased">

        {/* Skip-to-content for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <SmoothScrollProvider>
          <MotionProvider>

            {/* z -10  fixed decorative background */}
            <Atmosphere />

            {/* z 20   neutral cursor spotlight (desktop only) */}
            <MouseGlow />

            {/* z 50   1 px scroll-progress bar */}
            <ProgressBar />

            {/* z 40   site navigation */}
            <Navbar />

            {/* z 50   ambient player — fixed bottom-right */}
            <AmbientPlayer className="fixed bottom-5 right-5 z-50" />

            <div id="main-content">
              {children}
            </div>

            <SiteFooter />

          </MotionProvider>
        </SmoothScrollProvider>

      </body>
    </html>
  );
}
