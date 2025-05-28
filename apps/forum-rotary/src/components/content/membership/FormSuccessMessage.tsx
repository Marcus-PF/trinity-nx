'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function FormSuccessMessage() {
  return (
    <motion.div
      className="bg-primary text-primary-foreground py-12 px-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="status"
      aria-live="polite"
      aria-labelledby="membership-success"
    >
      <div className="max-w-md mx-auto space-y-3">
        <CheckCircle className="w-10 h-10 text-secondary mx-auto" aria-hidden="true" />
        <h2 id="membership-success" className="text-2xl font-semibold">
          Thank You!
        </h2>
        <p className="text-sm text-primary-foreground/90">
          Your application has been submitted. We’ll be in touch shortly.
        </p>
      </div>
    </motion.div>
  );
}
