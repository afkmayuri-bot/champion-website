import React from "react";

export default function HomePage() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            Champions Tutorials Pune
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Building Bright Futures Through Quality Education
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
}