'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee2() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section with AI Video */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gray-800/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-purple-400">
            Daniel Fernando Cortés González
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Ingeniero, empresario y apasionado por la inteligencia computacional
          </p>
          <div className="aspect-video bg-gray-800 rounded-2xl mb-12 overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <video
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/daniel.mp4`}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Story Sections */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gray-800/30" />
        <div className="max-w-6xl mx-auto space-y-32 relative z-10">
          {/* Story Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-400">
                Trayectoria Académica
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Con solo 16 años, Daniel ingresó a la Universidad Nacional, demostrando desde temprano su extraordinario potencial. Su paso por la universidad no solo fue académico, sino que también marcó el inicio de su visión empresarial.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="glass-card p-8 order-2 md:order-1">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;Mi tesis sobre lógica difusa y redes neuronales no fue solo un trabajo académico, fue el punto de partida para entender cómo la tecnología podía transformar la realidad.&rdquo;
              </p>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-purple-400">
                Innovación &amp; Desarrollo
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-400">
                Legado &amp; Visión
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                La historia de Daniel es un testimonio inspirador de cómo la disciplina, la pasión y una visión clara pueden construir un futuro prometedor en el mundo de la tecnología y la innovación.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;El éxito no es solo tener buenas ideas, es tener la disciplina para ejecutarlas y la visión para ver más allá de lo evidente.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast Invitation */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gray-800/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-400">
            Escucha la Historia Completa
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Únete a nosotros para una conversación profunda sobre el viaje de Daniel a través de la ingeniería y la inteligencia computacional.
          </p>
          <a
            href="https://youtu.be/32eEmHb1atE?list=PLH7DU-xDqcbejjNtxxIYDR9K5F1NYGi8L"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
          >
            Ver en YouTube
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center text-gray-400 border-t border-purple-500/20">
        <p>Created with ❤️ by Engineering Evolution Team</p>
      </footer>
    </main>
  );
}
