import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen p-8 bg-white text-gray-800 dark:bg-[#121212] dark:text-gray-200">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER SECTION */}
        <section className="text-center space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Discover who we are, what we do, and why TMDB continues to be the world’s most trusted source for movie, TV, and entertainment metadata.
          </p>
        </section>

        {/* OUR MISSION */}
        <section className="p-10 rounded-xl shadow-md border 
          bg-gray-100 border-gray-200 
          dark:bg-[#1c1c1c] dark:border-gray-700
          transition-all duration-300 hover:scale-[1.01] animate-slideUp"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to power the global entertainment ecosystem with accurate, community-driven metadata for movies, TV shows, and streaming content. 
            TMDB is built by passionate fans, creators, and engineers who believe in open data, transparency, and an exceptional viewing experience for everyone.
          </p>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="grid gap-8 md:grid-cols-3 animate-fadeInSlow">
          {[
            {
              title: "Community Powered",
              desc: "Thousands of contributors help update and improve data daily."
            },
            {
              title: "Accurate Metadata",
              desc: "We ensure clean, rich, and structured movie and TV details."
            },
            {
              title: "Global Platform",
              desc: "Available in multiple languages and used by millions worldwide."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl shadow-md border
              bg-gray-100 border-gray-200
              dark:bg-[#1c1c1c] dark:border-gray-700
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* HISTORY SECTION */}
        <section className="p-10 rounded-xl shadow-md border 
          bg-gray-100 border-gray-200 
          dark:bg-[#1c1c1c] dark:border-gray-700 
          animate-slideUpSlow"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Our History
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            TMDB was created to give entertainment fans a clean, structured, and accessible database that evolves with the industry. 
            What began as a simple open-source project has grown into one of the largest entertainment metadata platforms in the world, 
            trusted by developers, studios, streaming companies, and millions of users every month.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="text-center animate-fadeIn">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="max-w-xl mx-auto mb-4 text-gray-600 dark:text-gray-400">
            Want to collaborate or have questions? We’re here to help.
          </p>
          <a
            href="mailto:contact@tmdb.com"
            className="inline-block px-6 py-3 rounded-lg shadow-md 
            bg-blue-600 text-white hover:bg-blue-700 
            transition-all duration-200"
          >
            contact@tmdb.com
          </a>
        </section>

      </div>
    </div>
  );
};
