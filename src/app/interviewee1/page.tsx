'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section with AI Video */}
      <section className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Luis Bernardo Chicaiza
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ingeniero de sistemas, emprendedor y pionero tecnológico
          </p>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 overflow-hidden">
            <video
              src="/videos/luis.mp4"
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
              <h2 className="text-3xl font-bold text-blue-600">Visión Temprana</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Desde muy joven, Luis supo que su camino estaba en la creación de soluciones tecnológicas reales. Su visión y determinación lo llevaron a convertirse en un pionero en el desarrollo de software en Colombia.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;La clave está en enamorarse del problema, no solo de la tecnología. Cuando entiendes verdaderamente el problema, la solución se vuelve más clara.&rdquo;
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
                &ldquo;Fundar ConFusil, uno de los primeros antivirus colombianos, fue un desafío enorme. Pero creíamos en el desarrollo propio y en la capacidad de crear soluciones locales.&rdquo;
              </p>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-blue-600">Emprendimiento &amp; Innovación</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Su trayectoria incluye la fundación de empresas como Aranda Software, demostrando su compromiso con el desarrollo tecnológico local y el pensamiento crítico en la industria.
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
              <h2 className="text-3xl font-bold text-blue-600">Filosofía &amp; Legado</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Luis es un firme defensor del desarrollo propio y la eficiencia. Su enfoque en el pensamiento crítico ha influenciado a toda una generación de ingenieros y emprendedores.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;La tecnología es solo una herramienta. El verdadero valor está en cómo la usamos para resolver problemas reales y mejorar la vida de las personas.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast Invitation */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Escucha la Historia Completa</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Únete a nosotros para una conversación profunda sobre el viaje de Luis a través de la ingeniería y el emprendimiento tecnológico.
          </p>
          <a
            href="https://youtube.com/watch?v=example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
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
