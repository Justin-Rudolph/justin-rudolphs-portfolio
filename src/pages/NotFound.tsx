import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="bg-jr-dark min-h-[60vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <p className="text-jr-indigo text-xs font-semibold tracking-[0.2em] uppercase mb-3">404</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-slate-400 text-lg font-light mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-jr-indigo hover:bg-jr-indigo-dark text-white font-semibold text-sm tracking-wide transition-colors rounded-md"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
