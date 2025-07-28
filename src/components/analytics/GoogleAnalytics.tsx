import { useEffect } from 'react';
import React from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    fbq: (command: string, ...args: any[]) => void;
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

// Lead-specific tracking functions with UTM data
export const trackLeadFormStart = (utmData: any) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      event_category: 'Lead Generation',
      event_label: 'Fastcomm Demo Request',
      utm_source: utmData.utm_source,
      utm_medium: utmData.utm_medium,
      utm_campaign: utmData.utm_campaign,
      custom_parameter_device: utmData.device_type,
      custom_parameter_page: window.location.pathname
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Fastcomm Demo Request Form',
      content_category: 'Healthcare Technology',
      utm_source: utmData.utm_source,
      utm_campaign: utmData.utm_campaign
    });
  }
};

export const trackLeadFormSubmit = (leadData: any) => {
  // Google Analytics Enhanced Ecommerce
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead Generation',
      event_label: 'Demo Request Submitted',
      value: 1,
      currency: 'BRL',
      
      // UTM data
      utm_source: leadData.utm_source,
      utm_medium: leadData.utm_medium,
      utm_campaign: leadData.utm_campaign,
      utm_content: leadData.utm_content,
      utm_term: leadData.utm_term,
      
      // Lead data
      custom_parameter_company: leadData.company,
      custom_parameter_role: leadData.role,
      custom_parameter_interest: leadData.interest,
      custom_parameter_device: leadData.device_type,
      custom_parameter_time_on_page: leadData.time_on_page,
      custom_parameter_scroll_depth: leadData.scroll_depth,
      
      // Tracking
      custom_parameter_tracking_id: leadData.tracking_id
    });

    // Also track as conversion
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion ID
      value: 100, // Estimated value of a lead
      currency: 'BRL',
      transaction_id: leadData.tracking_id
    });
  }

  // Facebook Pixel Lead Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Fastcomm Demo Request',
      content_category: 'Healthcare Technology',
      value: 100,
      currency: 'BRL',
      
      // UTM and lead data
      utm_source: leadData.utm_source,
      utm_campaign: leadData.utm_campaign,
      company_name: leadData.company,
      job_title: leadData.role,
      interest_area: leadData.interest
    });

    // Track custom conversion
    window.fbq('trackCustom', 'FastcommDemoRequest', {
      utm_source: leadData.utm_source,
      utm_campaign: leadData.utm_campaign,
      device_type: leadData.device_type,
      time_on_page: leadData.time_on_page,
      scroll_depth: leadData.scroll_depth,
      tracking_id: leadData.tracking_id
    });
  }
};

export const trackLeadFormError = (errorData: any) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_error', {
      event_category: 'Lead Generation',
      event_label: 'Form Validation Error',
      error_type: errorData.error_type,
      fields_with_errors: errorData.fields_with_errors?.join(','),
      utm_source: errorData.utm_source,
      utm_campaign: errorData.utm_campaign
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'FormError', {
      error_type: errorData.error_type,
      utm_source: errorData.utm_source
    });
  }
};

export const trackFieldInteraction = (fieldData: any) => {
  // Only track important field interactions to avoid spam
  const importantFields = ['email', 'company', 'interest'];
  
  if (!importantFields.includes(fieldData.field)) {
    return;
  }

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_field_interaction', {
      event_category: 'Lead Generation',
      event_label: `Field: ${fieldData.field}`,
      field_name: fieldData.field,
      has_value: fieldData.has_value,
      utm_source: fieldData.utm_source
    });
  }
};

// Page engagement tracking with UTM context
export const trackPageEngagement = (engagementData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_engagement', {
      event_category: 'User Engagement',
      event_label: 'High Engagement',
      time_on_page: engagementData.time_on_page,
      scroll_depth: engagementData.scroll_depth,
      utm_source: engagementData.utm_source,
      utm_campaign: engagementData.utm_campaign,
      device_type: engagementData.device_type
    });
  }
};

// LinkedIn Insight Tag (if available)
export const trackLinkedInConversion = (leadData: any) => {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: 'LINKEDIN_CONVERSION_ID' });
  }
};