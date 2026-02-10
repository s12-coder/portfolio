import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Seif Sarieddine
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-4xl text-gray-300 mb-8">
              Full Stack Web Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting beautiful, functional, and user-centered web projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 justify-center mb-16"
          >
            <motion.a
              href="https://github.com/s12-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/seif-sarieddine-3abb78370/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:seifsariedd@gmail.com"
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-fuchsia-400/50 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}