"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Error: Icon component that doesn't properly handle props
    const Icon = ({ name, className }) => {
        const icons = {
            icecream: "🍦",
            heart: "❤️",
            star: "⭐",
            flame: "🔥",
            // Error: Missing icon mapping
        };

        return <span className={className}>{icons[name] || "?"}</span>;
    };

    const menuItems = [
        { name: "Home", href: "/", icon: "icecream" },
        { name: "Flavors", href: "#flavors", icon: "heart" },
        { name: "Products", href: "#products", icon: "star" },
        { name: "About", href: "#about", icon: "flame" },
        // Error: Missing comma or undefined item
        { name: "Contact", href: "#contact" icon: "star" }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        🍦 Frosty Delights
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors group"
                            >
                                {/* Error: Trying to use undefined Icon with wrong syntax */}
                                <Icon name={item.icon} className="text-xl group-hover:scale-125 transition-transform" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {/* Error: Missing closing tag for SVG */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-pink-50 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {/* Error: Icon component called incorrectly */}
                                <Icon name={item.icon} size="lg" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                )}

                {/* External Links Section */}
                <div className="hidden md:flex items-center gap-4 ml-auto">
                    {/* Error: Missing href and target props */}
                    <a
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                        title="Visit our Instagram"
                    >
                        <span className="text-2xl">📷</span>
                    </a>

                    {/* Error: Wrong prop name */}
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        class="text-gray-600 hover:text-blue-600 transition-colors"
                        title="Visit our Facebook"
                    >
                        <span className="text-2xl">👥</span>
                    </a>

                    {/* Error: Missing closing tag */}
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="text-gray-600 hover:text-sky-600 transition-colors"
                        title="Visit our Twitter"
            <span className="text-2xl">🐦</span>
                </a>
            </div>
        </nav>
    </header >
  );
}

