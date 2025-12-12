import React from "react";

export const About = () => {
  const values = [
    {
      title: "Transparency",
      desc: "We believe data should be open, accessible, and accurate for every user.",
    },
    {
      title: "Innovation",
      desc: "We continuously improve our technology to deliver the best discovery experience.",
    },
    {
      title: "Community",
      desc: "Our platform thrives because of passionate contributors across the world.",
    },
    {
      title: "Quality",
      desc: "We maintain strict validation to ensure only the highest-quality metadata.",
    },
  ];

  const achievements = [
    { number: "100M+", label: "Monthly API Requests" },
    { number: "1M+", label: "Community Edits" },
    { number: "70K+", label: "Contributors Worldwide" },
    { number: "200+", label: "Countries Using TMDB" },
  ];

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* HERO SECTION */}
        <section className="text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Learn more about how we built the world’s most comprehensive community-driven entertainment database used by millions of people every day.
          </p>
        </section>

        {/* MISSION */}
        <section
          className="p-10 rounded-xl shadow-md border
          bg-gray-100 border-gray-200
          dark:bg-gray-800 dark:border-gray-700 animate-slideUp"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to empower the entertainment ecosystem with precise,
            community-driven metadata for movies, shows, and streaming content.
            We aim to make discovery easier, faster, and more meaningful for
            every viewer and developer globally.
          </p>
        </section>

        {/* CORE VALUES */}
        <section className="space-y-10 animate-fadeInSlow">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl shadow-md border
                bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700
                hover:-translate-y-2 transition-transform duration-200"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-center dark:text-white">
            What We Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Community Driven",
                desc: "Thousands contribute daily to keep data fresh and accurate.",
              },
              {
                title: "Rich Metadata",
                desc: "High-quality structured movie and TV details for developers.",
              },
              {
                title: "Powerful API",
                desc: "Our robust API powers apps, websites, and studios worldwide.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl shadow-md border
                bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700
                hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="text-center space-y-12 animate-slideUpSlow">
          <h2 className="text-3xl font-bold dark:text-white">
            Our Global Impact
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {item.number}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

       

        {/* HISTORY TIMELINE */}
        <section className="space-y-12 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center dark:text-white">
            Our Journey
          </h2>

          <div className="space-y-8 border-l-4 border-blue-600 dark:border-blue-400 pl-6">
            <div>
              <h3 className="text-xl font-bold dark:text-white">2008</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TMDB was founded as an open-source movie database.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">2015</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TMDB API reached global adoption across major platforms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">2020</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Introduced multi-language metadata and global contributor tools.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">Today</h3>
              <p className="text-gray-600 dark:text-gray-400">
                One of the most trusted entertainment metadata sources worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="text-center space-y-6 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Have queries or want to collaborate? We would love to hear from you.
          </p>
          <a
            href="mailto:contact@tmdb.com"
            className="inline-block px-6 py-3 rounded-lg shadow-md 
            bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
          >
            contact@tmdb.com
          </a>
        </section>

      </div>
    </div>
  );
};
