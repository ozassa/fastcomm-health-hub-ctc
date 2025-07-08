import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from '../ContactSection';

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

describe('ContactSection', () => {
  it('renders contact form with all required fields', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail corporativo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/empresa/i)).toBeInTheDocument();
    expect(screen.getByText(/cargo/i)).toBeInTheDocument();
    expect(screen.getByText(/área de interesse/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/desafio ou necessidade específica/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const submitButton = screen.getByRole('button', { name: /solicitar demonstração/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
      expect(screen.getByText(/empresa deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const emailInput = screen.getByLabelText(/e-mail corporativo/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /solicitar demonstração/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    });
  });

  it('successfully submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    // Fill form with valid data
    await user.type(screen.getByLabelText(/nome completo/i), 'João Silva');
    await user.type(screen.getByLabelText(/e-mail corporativo/i), 'joao@empresa.com');
    await user.type(screen.getByLabelText(/empresa/i), 'Empresa Test');
    
    // Select role - using placeholder text instead
    const roleSelect = screen.getByText(/selecione seu cargo/i);
    await user.click(roleSelect);
    await waitFor(() => screen.getByText(/CTO/));
    await user.click(screen.getByText(/CTO/));
    
    // Select interest - using placeholder text instead
    const interestSelect = screen.getByText(/o que mais te interessa/i);
    await user.click(interestSelect);
    await waitFor(() => screen.getByText(/Integrações FHIR/));
    await user.click(screen.getByText(/Integrações FHIR/));
    
    await user.type(
      screen.getByLabelText(/desafio ou necessidade específica/i), 
      'Preciso integrar sistemas legados com padrão FHIR'
    );
    
    const submitButton = screen.getByRole('button', { name: /solicitar demonstração/i });
    await user.click(submitButton);
    
    // Check if form is in submitting state
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /enviando/i })).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<ContactSection />);
    
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('noValidate');
    
    // Check for proper labels
    const nameInput = screen.getByLabelText(/nome completo/i);
    expect(nameInput).toHaveAttribute('required');
    
    const emailInput = screen.getByLabelText(/e-mail corporativo/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
  });
});