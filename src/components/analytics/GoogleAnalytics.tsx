import { useEffect } from 'react';
import React from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

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

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'healthcare_leads',
      event_label: 'fastcomm_interaction',
      ...parameters
    });
  }
};

export const trackFormSubmit = (formType: string, success: boolean = true) => {
  trackEvent('form_submit', {
    event_category: 'lead_generation',
    event_label: formType,
    success: success,
    form_type: formType
  });
};

export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoName,
    video_name: videoName
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    event_category: 'content_engagement',
    event_label: fileName,
    file_name: fileName
  });
};

export const trackCalendlyClick = () => {
  trackEvent('calendly_click', {
    event_category: 'lead_generation',
    event_label: 'schedule_demo',
    action: 'calendly_redirect'
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'page_engagement',
    event_label: sectionName,
    section_name: sectionName
  });
};