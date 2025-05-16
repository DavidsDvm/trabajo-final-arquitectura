'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee1() {
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
            Luis Bernardo Chicaiza
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Ingeniero de sistemas, emprendedor y pionero tecnológico
          </p>
          <div className="aspect-video bg-gray-800 rounded-2xl mb-12 overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
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
                Visión Temprana
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Desde muy joven, Luis supo que su camino estaba en la creación de soluciones tecnológicas reales. Su visión y determinación lo llevaron a convertirse en un pionero en el desarrollo de software en Colombia.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="glass-card p-8 order-2 md:order-1">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;Fundar ConFusil, uno de los primeros antivirus colombianos, fue un desafío enorme. Pero creíamos en el desarrollo propio y en la capacidad de crear soluciones locales.&rdquo;
              </p>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-purple-400">
                Emprendimiento &amp; Innovación
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-400">
                Filosofía &amp; Legado
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Luis es un firme defensor del desarrollo propio y la eficiencia. Su enfoque en el pensamiento crítico ha influenciado a toda una generación de ingenieros y emprendedores.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;La tecnología es solo una herramienta. El verdadero valor está en cómo la usamos para resolver problemas reales y mejorar la vida de las personas.&rdquo;
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
            Únete a nosotros para una conversación profunda sobre el viaje de Luis a través de la ingeniería y el emprendimiento tecnológico.
          </p>
          <a
            href="https://youtu.be/CjkiXNWQiBU?list=PLH7DU-xDqcbejjNtxxIYDR9K5F1NYGi8L"
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
