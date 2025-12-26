import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoComplete: () => void;
}

const VideoModal = ({ isOpen, onClose, onVideoComplete }: VideoModalProps) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!videoEnded) {
      // If closed early, return to home
      navigate("/");
    }
    onClose();
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleContinue = () => {
    onVideoComplete();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95">
      {/* Close Button - Small X */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="max-w-3xl w-full mx-6 text-center">
        {/* Top Microcopy */}
        <p className="text-cream/80 text-sm tracking-widest uppercase mb-8">
          Before you continue— a brief note from the founder.
        </p>

        {/* Video Container */}
        <div className="relative aspect-video bg-charcoal rounded-sm overflow-hidden mb-8">
          {/* Placeholder video - replace with actual video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            playsInline
            poster="/placeholder.svg"
          >
            {/* Replace with actual video source */}
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback for demo - simulates video completion after 3 seconds */}
          {!videoEnded && (
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/50">
              <div className="text-center text-cream">
                <p className="text-lg mb-4 opacity-80">Video placeholder</p>
                <button
                  onClick={() => setVideoEnded(true)}
                  className="text-sm text-gold-light underline hover:text-cream transition-colors"
                >
                  Simulate video completion (for demo)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* After Video Content */}
        {videoEnded && (
          <div className="animate-fade-in">
            <p className="text-cream text-lg md:text-xl font-display italic mb-8">
              If this feels aligned, you're welcome to continue below.
            </p>
            <button
              onClick={handleContinue}
              className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-gold"
            >
              Request an Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
