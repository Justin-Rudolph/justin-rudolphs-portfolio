import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="bg-jr-dark min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <p className="text-jr-indigo text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Software Developer
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Justin Rudolph
          </h1>
          <p className="text-slate-400 text-lg font-light max-w-xl mb-8">
            Building thoughtful software experiences.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jr-indigo hover:bg-jr-indigo-dark text-white font-semibold text-sm tracking-wide transition-colors rounded-md"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 font-semibold text-sm tracking-wide transition-colors rounded-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
