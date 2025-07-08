import { useState, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactPlayer from 'react-player';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [played, setPlayed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setReady(false);
      setPlaying(false);
      setPlayed(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setPlaying(false);
    setPlayed(0);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
          <div>
            {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
            {description && <p className="text-sm text-slate-300">{description}</p>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            playing={playing}
            muted={muted}
            onProgress={({ played }) => setPlayed(played)}
            onReady={() => {
              setLoading(false);
              setReady(true);
            }}
            onBuffer={() => setLoading(true)}
            onBufferEnd={() => setLoading(false)}
            controls={false}
            config={{
              file: {
                attributes: {
                  preload: 'metadata'
                }
              }
            }}
          />
          
          {/* Loading Overlay */}
          {loading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex items-center gap-3 text-white">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Carregando vídeo...</span>
              </div>
            </div>
          )}
          
          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center group">
            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setPlaying(!playing)}
              className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
            >
              {playing ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </Button>
            
            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar */}
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${played * 100}%` }}
                />
              </div>
              
              {/* Volume Control */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMuted(!muted)}
                className="text-white hover:bg-white/20 backdrop-blur-sm"
              >
                {muted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-6 bg-slate-800 text-center">
          <p className="text-slate-300 mb-4">
            Gostou do que viu? Entre em contato para uma demonstração personalizada.
          </p>
          <Button 
            variant="default"
            size="lg"
            onClick={() => {
              handleClose();
              // Scroll to contact form
              setTimeout(() => {
                const contactSection = document.getElementById('contact') || document.querySelector('footer');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            Solicitar Demonstração Personalizada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;