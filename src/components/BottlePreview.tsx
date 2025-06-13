import React from "react";
import Image from "next/image";

type BottlePreviewProps = {
  ingredient: string;
  fragrance: string;
  color: string;
};

const BottlePreview: React.FC<BottlePreviewProps> = ({
  ingredient,
  fragrance,
  color,
}) => {
  return (
    <div className="bg-brand-surface rounded-lg shadow-sm p-6 lg:p-8 w-full max-w-md text-center">
      <h2 className="text-2xl font-serif text-brand-text mb-4">
        Your Custom Bottle
      </h2>

      <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1887&auto=format&fit=crop"
          alt="Custom bottle preview"
        />
      </div>

      <h3 className="text-xl font-serif text-brand-text">Your Brand Name</h3>

      <div className="text-left mt-4 space-y-2 text-gray-600">
        <p>
          <span className="font-semibold">Ingredient:</span> {ingredient}
        </p>
        <p>
          <span className="font-semibold">Fragrance:</span> {fragrance}
        </p>
        <p>
          <span className="font-semibold">Color:</span> {color}
        </p>
      </div>

      <button className="mt-6 w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
        View Full 3D Model
      </button>
    </div>
  );
};

export default BottlePreview;
