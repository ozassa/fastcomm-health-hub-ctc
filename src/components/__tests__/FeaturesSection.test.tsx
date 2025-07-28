import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeaturesSection from '../FeaturesSection';

describe('FeaturesSection', () => {
  it('renders the features section with correct heading', () => {
    render(<FeaturesSection />);
    
    const heading = screen.getByRole('heading', { 
      name: /plataforma completa para integrações em saúde/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<FeaturesSection />);
    
    // Test for specific feature cards
    expect(screen.getByText(/interface low-code/i)).toBeInTheDocument();
    expect(screen.getByText(/fhir engine nativo/i)).toBeInTheDocument();
    expect(screen.getByText(/segurança hospitalar/i)).toBeInTheDocument();
    expect(screen.getByText(/performance enterprise/i)).toBeInTheDocument();
    expect(screen.getByText(/conectores prontos/i)).toBeInTheDocument();
    expect(screen.getByText(/analytics avançado/i)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<FeaturesSection />);
    
    const section = screen.getByRole('region', { name: /características da plataforma/i });
    expect(section).toBeInTheDocument();
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByRole('button', { name: /ver demonstração/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /baixar material técnico/i })).toBeInTheDocument();
  });
});