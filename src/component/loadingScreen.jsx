import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function loadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Lingkaran loading */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full"
        ></motion.div>

        <Sparkles className="w-8 h-8 text-green-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </motion.div>

      {/* Teks animasi */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-gray-300 text-lg mt-6 tracking-wider"
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
}
