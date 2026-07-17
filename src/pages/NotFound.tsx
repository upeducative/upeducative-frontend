import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 aurora">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md text-center"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-accent">
          <span className="text-foreground font-bold text-3xl">404</span>
        </div>

        <h1 className="text-3xl font-semibold text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={ROUTES.home}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
