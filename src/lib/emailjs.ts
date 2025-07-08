export interface EmailParams {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
  website?: string; // Honeypot field
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