import { X, Play, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

interface SimpleVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const SimpleVideoModal = ({ isOpen, onClose, videoUrl, title }: SimpleVideoModalProps) => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Erro ao reproduzir vídeo:', error);
        setVideoError(true);
      });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
          <div>
            {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Video Player - HTML5 Native */}
        <div className="relative aspect-video bg-black">
          {videoError ? (
            <div className="flex flex-col items-center justify-center h-full text-white p-8">
              <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Erro ao Carregar Vídeo</h3>
              <p className="text-slate-300 text-center mb-4">
                Não foi possível reproduzir o vídeo. Tente baixar o arquivo diretamente.
              </p>
              <Button
                onClick={() => window.open(videoUrl, '_blank')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Baixar Vídeo
              </Button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                preload="metadata"
                poster="/ctc-favicon.png"
                onError={(e) => {
                  console.error('Video error:', e);
                  console.error('Video source:', videoUrl);
                  setVideoError(true);
                }}
                onLoadStart={() => {
                  console.log('Video loading started');
                  setIsLoading(true);
                }}
                onCanPlay={() => {
                  console.log('Video can play');
                  setIsLoading(false);
                }}
                onLoadedMetadata={() => {
                  console.log('Video metadata loaded');
                  setIsLoading(false);
                }}
              >
                <source src={videoUrl} type="video/mp4" />
                <p className="text-white p-4">
                  Seu navegador não suporta vídeos HTML5. 
                  <a href={videoUrl} className="text-blue-400 hover:underline ml-1">
                    Clique aqui para baixar o vídeo.
                  </a>
                </p>
              </video>
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="flex flex-col items-center text-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                    <p>Carregando vídeo...</p>
                  </div>
                </div>
              )}
              
              {!isLoading && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Button
                    onClick={handlePlayVideo}
                    className="pointer-events-auto bg-blue-600/90 hover:bg-blue-700 text-white rounded-full p-4"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800 text-center">
          <p className="text-slate-300 mb-3">
            Gostou do que viu? Entre em contato para uma demonstração personalizada.
          </p>
          <Button 
            onClick={() => {
              onClose();
              setTimeout(() => {
                const contactSection = document.getElementById('contact') || document.querySelector('footer');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Play className="w-4 h-4 mr-2" />
            Solicitar Demonstração Personalizada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleVideoModal;