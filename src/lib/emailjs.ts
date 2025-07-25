export interface EmailParams {
  // Basic form data
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
  website?: string; // Honeypot field
  
  // UTM Parameters
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  
  // Page/Session data
  referrer?: string;
  landing_page?: string;
  page_title?: string;
  
  // Device/Browser data
  user_agent?: string;
  screen_resolution?: string;
  device_type?: 'desktop' | 'mobile' | 'tablet';
  browser?: string;
  operating_system?: string;
  
  // Behavior data
  time_on_page?: number;
  scroll_depth?: number;
  
  // Source classification
  source?: string;
  channel?: string;
  funnel_stage?: string;
  tracking_id?: string;
  submitted_at?: string;
}

export const sendContactEmail = async (params: EmailParams) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao enviar email');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};