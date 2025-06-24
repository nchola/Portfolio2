import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const ProjectImageModal: React.FC<ProjectImageModalProps> = ({ open, onClose, images, title }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-4xl p-0 bg-black">
        <DialogTitle className="text-lg font-bold text-static-white px-6 pt-6">{title}</DialogTitle>
        <div className="relative flex items-center justify-center w-full h-[525px] bg-black">
          <img
            src={images[current]}
            alt={`${title} - ${current + 1}`}
            className="object-contain w-full h-full rounded-md"
            style={{ background: '#222' }}
          />
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight />
              </Button>
            </>
          )}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? 'bg-gilded-parchment' : 'bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectImageModal; 