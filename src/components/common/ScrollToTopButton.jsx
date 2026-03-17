import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              border: '2px solid rgba(255,255,255,0.2)',
              '&:hover': {
                backgroundColor: 'secondary.main',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s',
              width: 48,
              height: 48,
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
