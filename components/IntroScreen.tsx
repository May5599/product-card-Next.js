"use client";

export default function IntroScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-center px-4">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white animate-pulse drop-shadow-lg leading-tight">
        Product Card Demo
      </h1>

      {/* Spacer */}
      <div className="h-6 sm:h-8" />

      <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 tracking-wide font-medium">
        Next.js · TypeScript · Tailwind CSS
      </p>

      <span className="mt-8 text-lg sm:text-xl text-gray-400 font-light">
        by Mayank Maroti
      </span>
    </div>
  );
}
