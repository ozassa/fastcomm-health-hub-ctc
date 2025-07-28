import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/config/calendly";

interface BasicVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const BasicVideoModal = ({ isOpen, onClose, videoUrl, title }: BasicVideoModalProps) => {
  if (!isOpen) return null;


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

        {/* Video Player */}
        <div className="relative">
          <video
            width="100%"
            height="auto"
            controls
            preload="metadata"
            style={{ display: 'block', maxHeight: '70vh' }}
            className="bg-black"
          >
            <source src={videoUrl} type="video/mp4" />
            <p className="text-white p-4 text-center">
              Seu navegador não suporta reprodução de vídeos HTML5.<br />
              <a 
                href={videoUrl} 
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui para baixar o vídeo
              </a>
            </p>
          </video>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800 text-center">
          <p className="text-slate-300 mb-3">
            Gostou do que viu? Entre em contato para uma demonstração personalizada.
          </p>
          <Button 
            onClick={() => openCalendly(onClose)}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Demonstração Personalizada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicVideoModal;