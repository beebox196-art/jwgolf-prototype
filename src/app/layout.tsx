import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "One Clear Fix Golf Coaching | James Whitaker PGA",
  description: "Premium golf coaching with James Whitaker, PGA Professional. Titleist Ambassador, 50+ Tour Pros fitted, Leeds & District Head Coach. The Resilient Coach.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/[0.06]">
          <div className="section-container">
            <div className="flex items-center justify-between py-4 md:py-5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo.gif"
                  alt="James Whitaker Golf Logo"
                  width={120}
                  height={40}
                  className="h-10 md:h-12 object-contain"
                  unoptimized
                />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="nav-link font-inter text-sm">Home</Link>
                <Link href="/about" className="nav-link font-inter text-sm">About</Link>
                <Link href="/lessons" className="nav-link font-inter text-sm">Lessons</Link>
                <Link href="/contact" className="nav-link font-inter text-sm">Book</Link>
              </div>

              {/* Direct contact — phone + email in header on every page */}
              <div className="hidden lg:flex items-center gap-5 text-sm font-inter">
                <a
                  href="tel:07810647976"
                  className="nav-link flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span aria-hidden="true">📱</span> 07810 647976
                </a>
                <a
                  href="mailto:james@jwgolf.co.uk"
                  className="nav-link flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span aria-hidden="true">✉️</span> Email
                </a>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <a
                  href="tel:07810647976"
                  className="md:hidden lg:inline-flex btn-secondary px-4 py-2 text-sm whitespace-nowrap"
                  aria-label="Call James"
                >
                  Call
                </a>
                <Link href="/contact#booking" className="btn-primary px-6 py-2 text-sm">
                  Book Now
                </Link>
              </div>

              <div className="md:hidden flex items-center gap-2">
                <a
                  href="tel:07810647976"
                  className="btn-secondary px-3 py-2 text-sm"
                  aria-label="Call James"
                >
                  📱 Call
                </a>
                <Link
                  href="/contact#booking"
                  className="btn-primary px-4 py-2 text-sm"
                >
                  Book
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 w-full">{children}</main>
        
        <footer className="bg-black border-t border-white/[0.06] py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-playfair">James Whitaker</h3>
                <p className="text-gray-500 text-sm font-inter">
                  PGA Professional · Titleist Ambassador
                  <br />
                  Leeds &amp; District Union Head Coach
                </p>
                <p className="text-gray-500 text-sm font-inter">
                  📧 <a href="mailto:james@jwgolf.co.uk" className="hover:text-accent transition-colors">james@jwgolf.co.uk</a>
                  <br />
                  📱 <a href="tel:07810647976" className="hover:text-accent transition-colors">07810 647976</a>
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 font-inter text-sm tracking-wider uppercase">Coaching</h4>
                <ul className="space-y-3 text-sm text-gray-500 font-inter">
                  <li>
                    <Link href="/lessons#inperson" className="hover:text-white transition-colors">
                      In-Person Lessons
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#online" className="hover:text-white transition-colors">
                      Online Coaching
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#fitting" className="hover:text-white transition-colors">
                      Custom Fitting
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#playing" className="hover:text-white transition-colors">
                      Playing Lessons
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 font-inter text-sm tracking-wider uppercase">About</h4>
                <ul className="space-y-3 text-sm text-gray-500 font-inter">
                  <li>
                    <Link href="/about#method" className="hover:text-white transition-colors">
                      The One Clear Fix Method
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#story" className="hover:text-white transition-colors">
                      The Resilience Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#credentials" className="hover:text-white transition-colors">
                      Credentials
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 font-inter text-sm tracking-wider uppercase">Contact</h4>
                <ul className="space-y-3 text-sm text-gray-500 font-inter">
                  <li>Leeds, Yorkshire</li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Book a Session
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact#online" className="hover:text-white transition-colors">
                      Free Video Assessment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm font-inter">
                © {new Date().getFullYear()} James Whitaker Golf Coaching. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-gray-600 hover:text-white transition-colors font-inter text-sm">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors font-inter text-sm">
                  YouTube
                </Link>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors font-inter text-sm">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}