'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const interviewees = [
  { name: 'Luis Bernardo Chicaiza', path: '/interviewee1' },
  { name: 'Daniel Fernando', path: '/interviewee2' },
  { name: 'Dalia Trujillo', path: '/interviewee3' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-600 group-hover:to-cyan-500 transition-all duration-300">
                  Evolucion de la ingenieria
                </span>
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
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{interviewee.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 