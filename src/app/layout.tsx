import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "One Clear Fix Golf Coaching | James Whittaker PGA",
  description: "Premium golf coaching with James Whittaker, PGA Professional. Titleist Ambassador, 50+ Tour Pros fitted, Leeds & District Head Coach. The Resilient Coach.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5">
          <div className="section-container">
            <div className="flex items-center justify-between py-4 md:py-6">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo.gif"
                  alt="James Whittaker Golf Logo"
                  width={120}
                  height={40}
                  className="h-10 md:h-12 object-contain"
                  unoptimized
                />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/lessons" className="nav-link">Lessons</Link>
                <Link href="/contact" className="nav-link">Book</Link>
              </div>

              <div className="hidden md:block">
                <Link href="/contact#booking" className="btn-primary px-6 py-2 text-sm">
                  Book Now
                </Link>
              </div>

              <div className="md:hidden">
                <button className="text-white text-2xl">☰</button>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 w-full">{children}</main>
        
        <footer className="bg-black border-t border-white/5 py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent-gold">James Whittaker</h3>
                <p className="text-gray-400 text-sm">
                  PGA Professional • Titleist Ambassador
                  <br />
                  Leeds & District Union Head Coach
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Coaching</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/lessons#inperson" className="hover:text-accent-gold transition-colors">
                      In-Person Lessons
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#online" className="hover:text-accent-gold transition-colors">
                      Online Coaching
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#fitting" className="hover:text-accent-gold transition-colors">
                      Custom Fitting
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons#playing" className="hover:text-accent-gold transition-colors">
                      Playing Lessons
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">About</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/about#method" className="hover:text-accent-gold transition-colors">
                      The One Clear Fix Method
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#story" className="hover:text-accent-gold transition-colors">
                      The Resilience Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#credentials" className="hover:text-accent-gold transition-colors">
                      Credentials
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Leeds, Yorkshire</li>
                  <li>
                    <Link href="/contact" className="hover:text-accent-gold transition-colors">
                      Book a Session
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact#online" className="hover:text-accent-gold transition-colors">
                      Free Video Assessment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} James Whittaker Golf Coaching. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-gray-500 hover:text-accent-gold transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-500 hover:text-accent-gold transition-colors">
                  YouTube
                </Link>
                <Link href="#" className="text-gray-500 hover:text-accent-gold transition-colors">
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
