import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, Play } from "lucide-react";

interface Screenshot {
  id: string;
  src: string;
  title: string;
  description: string;
  category: 'dashboard' | 'integration' | 'monitoring' | 'analytics';
}

// Placeholder screenshots - replace with real ones
const screenshots: Screenshot[] = [
  {
    id: '1',
    src: '/screenshots/dashboard.png',
    title: 'Dashboard Principal',
    description: 'Visão geral de todas as integrações ativas e métricas em tempo real',
    category: 'dashboard'
  },
  {
    id: '2', 
    src: '/screenshots/integration-setup.png',
    title: 'Configuração de Integração',
    description: 'Interface intuitiva para configurar novas integrações FHIR e HL7',
    category: 'integration'
  },
  {
    id: '3',
    src: '/screenshots/data-mapping.png', 
    title: 'Mapeamento de Dados',
    description: 'Ferramenta visual para mapear campos entre diferentes sistemas',
    category: 'integration'
  },
  {
    id: '4',
    src: '/screenshots/monitoring.png',
    title: 'Monitoramento em Tempo Real',
    description: 'Acompanhe o status e performance de todas as suas integrações',
    category: 'monitoring'
  },
  {
    id: '5',
    src: '/screenshots/analytics.png',
    title: 'Analytics e Relatórios',
    description: 'Relatórios detalhados sobre volume de dados, latência e erros',
    category: 'analytics'
  }
];

const categoryLabels = {
  dashboard: 'Dashboard',
  integration: 'Integração',
  monitoring: 'Monitoramento', 
  analytics: 'Analytics'
};

interface ScreenshotGalleryProps {
  onVideoClick?: () => void;
}

const ScreenshotGallery = ({ onVideoClick }: ScreenshotGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('dashboard');
  const [lightboxImage, setLightboxImage] = useState<Screenshot | null>(null);

  const filteredScreenshots = screenshots.filter(
    screenshot => selectedCategory === 'all' || screenshot.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          Todas
        </Button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Video Demo CTA */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Quer ver a plataforma em ação?</h3>
          <p className="text-muted-foreground">
            Assista nossa demonstração completa e veja como o Fastcomm pode revolucionar 
            suas integrações de saúde.
          </p>
          <Button 
            onClick={onVideoClick}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Play className="w-4 h-4 mr-2" />
            Assistir Demonstração Completa
          </Button>
        </div>
      </Card>

      {/* Screenshots Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreenshots.map((screenshot) => (
          <Card key={screenshot.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video bg-slate-100">
              {/* Placeholder for screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl text-slate-400">📊</div>
                  <div className="text-sm text-slate-500 font-medium">{screenshot.title}</div>
                  <div className="text-xs text-slate-400">Screenshot em breve</div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  size="sm"
                  onClick={() => setLightboxImage(screenshot)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <ZoomIn className="w-4 h-4 mr-2" />
                  Ver Detalhes
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold mb-2">{screenshot.title}</h4>
              <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {categoryLabels[screenshot.category]}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">{lightboxImage.title}</h3>
                <p className="text-sm text-muted-foreground">{lightboxImage.description}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl text-slate-400">📱</div>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-slate-600">{lightboxImage.title}</div>
                  <div className="text-sm text-slate-500">Screenshot será adicionado em breve</div>
                  <Button 
                    onClick={() => {
                      setLightboxImage(null);
                      onVideoClick?.();
                    }}
                    className="mt-4"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ver no Vídeo Demonstração
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;