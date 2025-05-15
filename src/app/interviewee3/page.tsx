'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee3() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section with AI Video */}
      <section className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Mike Johnson
          </h1>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8">
            {/* AI Video Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              AI Video Coming Soon
            </div>
          </div>
        </motion.div>
      </section>

      {/* Story Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Story Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-green-600">Innovation Era</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Mike was at the forefront of the digital revolution in engineering during the 90s...
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;We were living in an era where every day brought new possibilities. The internet was changing everything...&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Story Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg order-2 md:order-1">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;The most exciting part was seeing how our work directly impacted people&apos;s lives. We were building the future...&rdquo;
              </p>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-green-600">Digital Transformation</h2>
              <p className="text-gray-600 dark:text-gray-300">
                From traditional engineering to digital solutions, Mike&apos;s career reflects the evolution of the field...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast Invitation */}
      <section className="py-16 px-4 bg-green-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Listen to the Full Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join us for an in-depth conversation about Mike&apos;s role in the digital transformation of engineering.
          </p>
          <a
            href="https://youtube.com/watch?v=example3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            Watch on YouTube
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400">
        <p>Created with ❤️ by Engineering Evolution Team</p>
      </footer>
    </main>
  );
}
