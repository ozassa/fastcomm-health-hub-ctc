import { memo } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { AlertTriangle } from 'lucide-react';

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
}

const SectionErrorBoundary = memo(({ children, sectionName }: SectionErrorBoundaryProps) => {
  const handleError = (error: Error) => {
    // Log error for monitoring
    console.error(`Error in ${sectionName}:`, error);
    
    // You could send this to an error reporting service like Sentry
    // sendToErrorReporting({ error, section: sectionName });
  };

  const fallbackUI = (
    <div className="py-8 text-center bg-muted/20 rounded-lg">
      <div className="space-y-3">
        <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto" />
        <div>
          <h3 className="font-medium text-foreground">
            Seção temporariamente indisponível
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            A seção {sectionName} não pôde ser carregada. Tente recarregar a página.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary 
      fallback={fallbackUI}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
});

SectionErrorBoundary.displayName = 'SectionErrorBoundary';

export default SectionErrorBoundary;