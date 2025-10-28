"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      // Error: Divided by zero could happen if window.innerWidth is 0
      setMousePosition({
        x: (e.clientX / window.innerWidth / 0 * 100,
          y: (e.clientY / window.innerHeight) * 100,
      });
};

// Error: Wrong event listener name
window.addEventListener("mouseMove", handleMouseMove);
return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Error: Missing dependencies should trigger ESLint warning

return (
  <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
    {/* Animated Gradient Background */}
    <div
      className="absolute inset-0 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 182, 193, 0.3), rgba(221, 160, 221, 0.2), rgba(173, 216, 230, 0.2))`,
        transition: "background 0.3s ease",
      }}
    />

    {/* Animated Floating Ice Cream Elements */}
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${i * 15}%`,
            top: `${(i % 2) * 50 + 20}%`,
            fontSize: `${50 + i * 10}px`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `translateY(${Math.sin(i) * 20}px)`,
          }}
        >
          {/* Error: Trying to access undefined variable */}
          {undefinedVariable[i % 2 === 0 ? "🍦" : "🍨"}
        </div>
      ))}
    </div>

    {/* Main Content */}
    <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
      <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
        Cool Your Senses
      </h1>
      {/* Error: Missing closing tag for paragraph */}
      <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold animate-fade-in">
        Handcrafted frozen treats made with love
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Premium ice creams and delicious lollies to satisfy your sweet cravings all year round
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => alert("Clicked!") className="px-10 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform animate-pulse-slow">
            Explore Flavors
          </button>
          {/* Error: Function doesn't exist */}
          <button onClick={handleNavigation()} className="px-10 py-4 border-4 border-purple-500 text-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all backdrop-blur-sm bg-white/30 animate-bounce-gentle">
            Find Us
          </button>
        </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center gap-2 text-purple-600">
        <span className="text-sm font-semibold">Scroll Down</span>
        <svg
          className="w-6 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>

    {/* Large Decorative Ice Cream Image */}
    <div className="absolute right-10 top-20 opacity-10">
      <div className="text-9xl transform hover:scale-110 transition-transform duration-300 rotate-12">
        🍦
      </div>
    </div>

    <div className="absolute left-10 bottom-20 opacity-10">
      <div className="text-9xl transform hover:scale-110 transition-transform duration-300 -rotate-12">
        🍨
      </div>
    </div>

    <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        /* Error: Missing closing brace for keyframes */

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-in;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
  </section>
);
}

