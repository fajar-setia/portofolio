import { use, useEffect, useState } from "react";
import "./App.css";
import Beranda from "./pages/beranda";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LoadingScreen from "./component/loadingScreen";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white overflow-x-hidden">
      <AnimatePresence mode="sync">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Beranda />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
