'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const interviewees = [
  { name: 'John Doe', path: '/interviewee1' },
  { name: 'Jane Smith', path: '/interviewee2' },
  { name: 'Mike Johnson', path: '/interviewee3' },
  { name: 'Sarah Williams', path: '/interviewee4' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Evolucion de la ingenieria
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {interviewees.map((interviewee, index) => (
              <motion.div
                key={interviewee.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={interviewee.path}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {interviewee.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 