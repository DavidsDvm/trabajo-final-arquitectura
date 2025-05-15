'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section with AI Video */}
      <section className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Jane Smith
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
              <h2 className="text-3xl font-bold text-purple-600">Breaking Barriers</h2>
              <p className="text-gray-600 dark:text-gray-300">
                As one of the few women in engineering during the 90s, Jane's journey was both challenging and inspiring...
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                "Being a woman in engineering back then meant constantly proving yourself, but it also meant being part of something revolutionary..."
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
                "The most rewarding part of my career has been mentoring young engineers and seeing them succeed..."
              </p>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-purple-600">Legacy & Impact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Jane's contributions to the field have paved the way for future generations of engineers...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast Invitation */}
      <section className="py-16 px-4 bg-purple-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Listen to the Full Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join us for an in-depth conversation about Jane's pioneering journey in engineering.
          </p>
          <a
            href="https://youtube.com/watch?v=example2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
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