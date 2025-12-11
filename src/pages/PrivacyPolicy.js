
import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          Effective Date: November 15, 2022
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            When using any of our products or interacting with themoviedb.org...
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            We collect and process data that we use to provide you with TMDB products...
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            If you have a disability and need this policy provided in a different format, email{" "}
            <a href="mailto:privacy@xperi.com" className="underline text-blue-600 dark:text-blue-400">
              privacy@xperi.com
            </a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Third Parties
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            This Privacy Policy does not apply to any third-party applications...
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            BY ACCEPTING THE PRIVACY POLICY, YOU EXPRESSLY AUTHORIZE TMDB...
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Information We Collect Automatically
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            The following information was collected automatically, including in the last 12 months:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>TMDB Products and Your Data</li>
            <li>TMDB Account Data</li>
            <li>TMDB Product Data</li>
            <li>Third-Party Application Data</li>
            <li>Functional Data</li>
            <li>TMDB Mobile Applications</li>
            <li>Customer Support Correspondence</li>
            <li>Service Providers and Partners</li>
            <li>User Forums</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            How We Use the Information We Collect
          </h2>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>to provide you with access to the TMDB products;</li>
            <li>to analyze your usage of TMDB product features;</li>
            <li>to help ensure technical functionality;</li>
            <li>to communicate with you for TMDB product purposes;</li>
            <li>to enforce this Privacy Policy;</li>
            <li>to comply with laws and regulations;</li>
            <li>as otherwise stated in this Privacy Policy.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            How We Share Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>User Consent or Direction</li>
            <li>Service Providers and Third Parties</li>
            <li>Law and Harm</li>
            <li>Business Transfers and Affiliates</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Accessing, Updating, and Deleting Your Information
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            If you are a registered user of TMDB products, you can update your personal information by contacting{" "}
            <a href="mailto:privacy@xperi.com" className="underline text-blue-600 dark:text-blue-400">
              privacy@xperi.com
            </a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Cookies and Similar Technologies
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            TMDB websites use cookies and similar technologies to improve performance...
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Children
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            TMDB products are not directed to children under 18...
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Changes to the Privacy Policy
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            We may update this policy from time to time...
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Questions
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            For any questions, contact{" "}
            <a href="mailto:privacy@xperi.com" className="underline text-blue-600 dark:text-blue-400">
              privacy@xperi.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
};
