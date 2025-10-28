"use client";

import { useState } from "react";

export default function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Main Image Display */}
            <div className="relative aspect-square bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-100">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                    {images[currentIndex]}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
                    aria-label="Previous image"
                >
                    <span className="text-2xl">←</span>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
                    aria-label="Next image"
                >
                    <span className="text-2xl">→</span>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 justify-center mt-6">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-16 h-16 rounded-xl border-4 transition-all flex items-center justify-center text-3xl ${index === currentIndex
                                ? "border-pink-500 shadow-lg scale-110"
                                : "border-gray-200 hover:border-pink-300 hover:scale-105"
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    >
                        {image}
                    </button>
                ))}
            </div>
        </div>
    );
}

