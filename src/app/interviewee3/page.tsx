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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Dalia Trujillo Penagos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ingeniera de software, pionera en pruebas y metodologías ágiles
          </p>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 overflow-hidden">
            <video
              src="/videos/dalia.mp4"
              autoPlay
              loop
              playsInline
              className="w-full h-full object-fit"
            />
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
              <h2 className="text-3xl font-bold text-green-600">Orígenes &amp; Inspiración</h2>
              <p className="text-gray-600 dark:text-gray-300">
                La fascinación de Dalia por el software comenzó con las matemáticas y una película que cambiaría su vida: Tron. Esta combinación única de arte y ciencia despertó su pasión por la tecnología, incluso antes de saber programar.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;La película Tron me mostró un mundo donde la tecnología y la humanidad se entrelazaban de manera mágica. Fue el inicio de mi amor por el software.&rdquo;
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
                &ldquo;Mi carrera ha sido un viaje desde lo técnico hasta lo estratégico, pero siempre manteniendo el foco en la calidad y el valor humano.&rdquo;
              </p>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-green-600">Evolución Profesional</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Desde sus inicios en la base técnica hasta su rol actual liderando una plataforma de automatización de pruebas, Dalia ha construido una carrera que demuestra la importancia de la evolución constante en el mundo del software.
              </p>
            </div>
          </motion.div>

          {/* Story Section 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-green-600">Filosofía &amp; Visión</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Para Dalia, la ingeniería de software va más allá del código: es construir con sentido y servir a las personas. Su enfoque único une humanidad, tecnología y calidad en cada proyecto.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;La verdadera excelencia en software no está solo en el código, está en cómo ese código mejora la vida de las personas.&rdquo;
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
          <h2 className="text-3xl font-bold mb-6">Escucha la Historia Completa</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Únete a nosotros para una conversación profunda sobre el viaje de Dalia a través de la ingeniería de software y su visión única de la tecnología.
          </p>
          <a
            href="https://youtube.com/watch?v=example3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            Ver en YouTube
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
