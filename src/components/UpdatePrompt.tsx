import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from './ui/button';
import { RefreshCw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function UpdatePrompt() {
  const { t } = useTranslation();
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swScriptUrl) {
    },
    onRegisterError(error) {
      console.error('Service Worker registration error:', error);
    },
  });

  return (
    <AnimatePresence>
      {needRefresh && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-100 max-w-md w-full"
        >
          <div className="bg-background/90 backdrop-blur-xl border border-border/80 text-foreground p-5 rounded-2xl shadow-2xl flex flex-col gap-4 relative overflow-hidden group">
            {/* Subtle glow border */}
            <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none group-hover:border-primary/40 transition-colors duration-300" />
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <RefreshCw className="w-5 h-5 animate-[spin_3s_linear_infinite]" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-semibold text-sm tracking-tight">{t('pwa.title')}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t('pwa.description')}
                </p>
              </div>
              <button
                onClick={() => setNeedRefresh(false)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-secondary/80 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex gap-3 justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground hover:text-foreground h-9"
                onClick={() => setNeedRefresh(false)}
              >
                {t('pwa.later')}
              </Button>
              <Button
                variant="default"
                size="sm"
                className="text-xs h-9 gap-2 shadow-sm font-medium"
                onClick={() => updateServiceWorker(true)}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {t('pwa.update')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Test comment to trigger Vercel deployment update test

