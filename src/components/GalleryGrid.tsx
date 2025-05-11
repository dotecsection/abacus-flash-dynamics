
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageProps {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryGridProps {
  images: ImageProps[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  
  const openModal = (image: ImageProps) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => openModal(image)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-3xl">
          {selectedImage && (
            <div>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full rounded-lg mb-4"
              />
              <p className="text-lg font-medium">{selectedImage.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryGrid;
