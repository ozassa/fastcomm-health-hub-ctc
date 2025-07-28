import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders hero section with main heading', () => {
    render(<HeroSection />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/interoperabilidade/i);
  });

  it('renders CTA buttons', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('button', { name: /solicitar demonstração/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver documentação técnica/i })).toBeInTheDocument();
  });

  it('displays trust indicators', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/fhir r4 compliant/i)).toBeInTheDocument();
    expect(screen.getByText(/lgpd compliance/i)).toBeInTheDocument();
    expect(screen.getByText(/99\.9% uptime sla/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HeroSection />);
    
    const section = screen.getByRole('banner');
    expect(section).toBeInTheDocument();
  });
});