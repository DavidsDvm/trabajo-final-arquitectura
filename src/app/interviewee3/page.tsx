'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Interviewee3() {
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
            Dalia Trujillo Penagos
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Ingeniera de software, pionera en pruebas y metodologías ágiles
          </p>
          <div className="aspect-video bg-gray-800 rounded-2xl mb-12 overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <video
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/dalia.mp4`}
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
                Orígenes &amp; Inspiración
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                La fascinación de Dalia por el software comenzó con las matemáticas y una película que cambiaría su vida: Tron. Esta combinación única de arte y ciencia despertó su pasión por la tecnología, incluso antes de saber programar.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="glass-card p-8 order-2 md:order-1">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;Mi carrera ha sido un viaje desde lo técnico hasta lo estratégico, pero siempre manteniendo el foco en la calidad y el valor humano.&rdquo;
              </p>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-purple-400">
                Evolución Profesional
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-purple-400">
                Filosofía &amp; Visión
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Para Dalia, la ingeniería de software va más allá del código: es construir con sentido y servir a las personas. Su enfoque único une humanidad, tecnología y calidad en cada proyecto.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;La verdadera excelencia en software no está solo en el código, está en cómo ese código mejora la vida de las personas.&rdquo;
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
            Únete a nosotros para una conversación profunda sobre el viaje de Dalia a través de la ingeniería de software y su visión única de la tecnología.
          </p>
          <a
            href="https://youtu.be/nmewmKGJFPQ?list=PLH7DU-xDqcbejjNtxxIYDR9K5F1NYGi8L"
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
        <p>Created with ❤️ by Engineering Evolution Team - Utadeo</p>
      </footer>
    </main>
  );
}
