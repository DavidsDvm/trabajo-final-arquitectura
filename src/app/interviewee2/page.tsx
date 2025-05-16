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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Daniel Fernando Cortés González
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ingeniero, empresario y apasionado por la inteligencia computacional
          </p>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 overflow-hidden">
            <video
                src="/videos/daniel.mp4"
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
              <h2 className="text-3xl font-bold text-purple-600">Trayectoria Académica</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Con solo 16 años, Daniel ingresó a la Universidad Nacional, demostrando desde temprano su extraordinario potencial. Su paso por la universidad no solo fue académico, sino que también marcó el inicio de su visión empresarial.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;La universidad fue el lugar donde descubrí que podía combinar mi pasión por la tecnología con el espíritu emprendedor. Los grupos de estudio que impulsé fueron el semillero de grandes ideas.&rdquo;
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
                &ldquo;Mi tesis sobre lógica difusa y redes neuronales no fue solo un trabajo académico, fue el punto de partida para entender cómo la tecnología podía transformar la realidad.&rdquo;
              </p>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-purple-600">Innovación &amp; Desarrollo</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Su trabajo en inteligencia computacional, combinando lógica difusa y redes neuronales, sentó las bases para soluciones tecnológicas innovadoras que transformarían su visión en una empresa exitosa.
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
              <h2 className="text-3xl font-bold text-purple-600">Legado &amp; Visión</h2>
              <p className="text-gray-600 dark:text-gray-300">
                La historia de Daniel es un testimonio inspirador de cómo la disciplina, la pasión y una visión clara pueden construir un futuro prometedor en el mundo de la tecnología y la innovación.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                &ldquo;El éxito no es solo tener buenas ideas, es tener la disciplina para ejecutarlas y la visión para ver más allá de lo evidente.&rdquo;
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
          <h2 className="text-3xl font-bold mb-6">Escucha la Historia Completa</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Únete a nosotros para una conversación profunda sobre el viaje de Daniel a través de la ingeniería y la inteligencia computacional.
          </p>
          <a
            href="https://youtube.com/watch?v=example2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
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
