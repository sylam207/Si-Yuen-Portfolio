import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { motion, MotionConfig } from 'framer-motion';

const About = lazy(() => import('./components/About'));
const Languages = lazy(() => import('./components/Languages'));
const Tech = lazy(() => import('./components/Tech'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-300 antialiased"
    >
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <div className="container mx-auto px-8">
        <Navbar/>
        <main id="main">
        <Hero/>
        <ErrorBoundary>
        <Suspense fallback={
          <div className="flex justify-center py-20">
            <svg className="h-8 w-8 animate-spin text-purple-400" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        }>
          <About/>
          <Languages/>
          <Tech/>
          <Experience/>
          <Contact/>
        </Suspense>
        </ErrorBoundary>
        </main>
        <Footer/>
      </div>
      <BackToTop/>
    </motion.div>
    </MotionConfig>
  );
};

export default App;