import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics if not already done
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page view
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return null;
};