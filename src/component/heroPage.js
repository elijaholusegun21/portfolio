import './hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden hero-bg"
    >
      <div className="text-center space-y-6 relative z-10 px-6 md:px-0 max-w-screen-lg mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-Kanit text-gray-200 leading-snug"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hi, I'm Elijah Omokolade Ashaolu.
        </motion.h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 font-KaiseiHarunoUm italic px-2 sm:px-6">
          A passionate developer who loves creating innovative solutions.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 font-KaiseiHarunoUm italic px-4 sm:px-8">
          Specializing in front-end and interactive design to deliver unique experiences.
        </p>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-navy-800 opacity-25 rounded-full"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 bg-navy-700 opacity-20 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
