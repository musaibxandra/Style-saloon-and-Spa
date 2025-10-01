'use client';

import React from "react";
import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Example Shadcn-style Footer component
// - Uses Tailwind utility classes
// - Uses shadcn/ui primitives (Button, Input, Card)
// - Responsive, accessible, and easily themable

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Social */}
          <div className="space-y-4">
            <Image
              src="/icons/logo_copy.png"
              alt="Style logo"
              width={164}
              height={24}>
            </Image>
            <h3 className="text-2xl font-semibold">Style Saloon & Spa</h3>
            <p className="text-sm opacity-80">
              H369 R7307 B373 Abu Ghazal <br/> Tubli, Manama, Bahrain
            </p>

            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Mail" className="hover:opacity-80">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sitemap / Links */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1">
            <div>
              <h4 className="text-sm font-medium mb-3">Product</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium mb-3">Stay in the loop</h4>
            <p className="text-sm opacity-80 mb-4">Get product updates, tips, and early access.</p>

            <Card className="p-2">
              <CardContent className="p-4">
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Replace with real subscription logic
                    alert("Subscribed (demo)");
                  }}
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>

                  <div className="flex-1">
                    <div className="relative">
                      <Input
                        id="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        required
                      />
                      <div className="absolute inset-y-0 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail className="w-4 h-4 opacity-80" />
                      </div>
                    </div>
                  </div>

                  <Button type="submit">Subscribe</Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-xs opacity-70 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <nav className="flex items-center gap-4 text-sm opacity-90">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Security
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
