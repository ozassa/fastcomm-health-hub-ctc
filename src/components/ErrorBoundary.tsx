import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <Card className="p-8 text-center max-w-md mx-auto">
          <div className="space-y-4">
            <div className="flex justify-center">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Algo deu errado</h3>
              <p className="text-muted-foreground">
                Ocorreu um erro inesperado. Nossa equipe foi notificada.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-muted-foreground">
                    Detalhes do erro (desenvolvimento)
                  </summary>
                  <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={this.handleRetry}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Tentar novamente
              </Button>
              
              <Button 
                onClick={() => window.location.reload()}
                variant="default"
                size="sm"
              >
                Recarregar página
              </Button>
            </div>
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;