/**
 * Tracking utilities for Landing Page analytics
 * Captures UTM parameters, device info, and user behavior data
 */

export interface UTMParameters {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

export interface TrackingData {
  // UTM Parameters
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  
  // Page/Session data
  referrer: string;
  landing_page: string;
  page_title: string;
  
  // Device/Browser data
  user_agent: string;
  screen_resolution: string;
  device_type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  operating_system: string;
  
  // Timestamps
  page_load_time: string;
  session_start: string;
  timestamp: string;
  
  // Behavior data
  time_on_page?: number;
  scroll_depth?: number;
}

/**
 * Capture UTM parameters from current URL
 */
export function captureUTMParameters(): UTMParameters {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source') || 'direct',
    utm_medium: urlParams.get('utm_medium') || 'none',
    utm_campaign: urlParams.get('utm_campaign') || 'no-campaign',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || ''
  };
}

/**
 * Detect device type based on user agent and screen size
 */
export function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  const userAgent = navigator.userAgent.toLowerCase();
  const screenWidth = window.screen.width;
  
  // Check for mobile devices
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    // Distinguish between tablet and mobile
    if (screenWidth >= 768) {
      return 'tablet';
    }
    return 'mobile';
  }
  
  // Check screen size for responsive detection
  if (screenWidth < 768) {
    return 'mobile';
  } else if (screenWidth < 1024) {
    return 'tablet';
  }
  
  return 'desktop';
}

/**
 * Extract browser information from user agent
 */
export function getBrowserInfo(): { browser: string; operating_system: string } {
  const userAgent = navigator.userAgent;
  
  // Detect browser
  let browser = 'unknown';
  if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) {
    browser = 'Chrome';
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari';
  } else if (userAgent.includes('Edge')) {
    browser = 'Edge';
  } else if (userAgent.includes('Opera')) {
    browser = 'Opera';
  }
  
  // Detect OS
  let operating_system = 'unknown';
  if (userAgent.includes('Windows')) {
    operating_system = 'Windows';
  } else if (userAgent.includes('Mac OS X')) {
    operating_system = 'macOS';
  } else if (userAgent.includes('Linux')) {
    operating_system = 'Linux';
  } else if (userAgent.includes('Android')) {
    operating_system = 'Android';
  } else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    operating_system = 'iOS';
  }
  
  return { browser, operating_system };
}

/**
 * Get comprehensive tracking data
 */
export function getTrackingData(): TrackingData {
  const utmParams = captureUTMParameters();
  const { browser, operating_system } = getBrowserInfo();
  const deviceType = getDeviceType();
  
  const now = new Date();
  
  return {
    // UTM Parameters
    ...utmParams,
    
    // Page/Session data
    referrer: document.referrer || 'direct',
    landing_page: window.location.href,
    page_title: document.title,
    
    // Device/Browser data
    user_agent: navigator.userAgent,
    screen_resolution: `${screen.width}x${screen.height}`,
    device_type: deviceType,
    browser,
    operating_system,
    
    // Timestamps
    page_load_time: (performance.timing?.loadEventEnd - performance.timing?.navigationStart)?.toString() || '0',
    session_start: sessionStorage.getItem('session_start') || now.toISOString(),
    timestamp: now.toISOString()
  };
}

/**
 * Calculate time spent on page
 */
export function getTimeOnPage(): number {
  const sessionStart = sessionStorage.getItem('session_start');
  if (!sessionStart) {
    return 0;
  }
  
  const startTime = new Date(sessionStart).getTime();
  const currentTime = new Date().getTime();
  
  return Math.round((currentTime - startTime) / 1000); // Return seconds
}

/**
 * Calculate scroll depth percentage
 */
export function getScrollDepth(): number {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  const scrollDepth = (scrollTop + windowHeight) / documentHeight;
  return Math.round(scrollDepth * 100);
}

/**
 * Store session start time
 */
export function initializeSession(): void {
  if (!sessionStorage.getItem('session_start')) {
    sessionStorage.setItem('session_start', new Date().toISOString());
  }
}

/**
 * Determine campaign type based on UTM medium
 */
export function getCampaignType(utm_medium: string): 'paid' | 'organic' | 'direct' | 'referral' {
  const medium = utm_medium?.toLowerCase() || '';
  
  const paidMedia = ['cpc', 'paid', 'ppc', 'display', 'social-paid', 'paid-social', 'adwords', 'facebook-ads'];
  const organicMedia = ['organic', 'social', 'social-organic'];
  const referralMedia = ['referral', 'link', 'website'];
  
  if (paidMedia.some(p => medium.includes(p))) return 'paid';
  if (organicMedia.some(p => medium.includes(p))) return 'organic';
  if (referralMedia.some(p => medium.includes(p))) return 'referral';
  
  return 'direct';
}

/**
 * Generate unique tracking ID for this submission
 */
export function generateTrackingId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `lp_${timestamp}_${randomStr}`;
}

/**
 * Track form interaction events
 */
export function trackFormEvent(eventType: 'start' | 'field_focus' | 'submit' | 'error', data?: any): void {
  const trackingData = {
    event: `form_${eventType}`,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...data
  };
  
  // Import analytics functions dynamically to avoid circular dependencies
  import('@/components/analytics/GoogleAnalytics').then(({ 
    trackLeadFormStart, 
    trackLeadFormSubmit, 
    trackLeadFormError, 
    trackFieldInteraction 
  }) => {
    const utmData = getTrackingData();
    
    switch (eventType) {
      case 'start':
        trackLeadFormStart(utmData);
        break;
      case 'submit':
        trackLeadFormSubmit({ ...utmData, ...data });
        break;
      case 'error':
        trackLeadFormError({ ...data, utm_source: utmData.utm_source, utm_campaign: utmData.utm_campaign });
        break;
      case 'field_focus':
        trackFieldInteraction({ ...data, utm_source: utmData.utm_source });
        break;
    }
  }).catch(error => {
    console.warn('Analytics tracking failed:', error);
  });
  
  // Store in sessionStorage for debugging
  const events = JSON.parse(sessionStorage.getItem('form_events') || '[]');
  events.push(trackingData);
  sessionStorage.setItem('form_events', JSON.stringify(events));
}