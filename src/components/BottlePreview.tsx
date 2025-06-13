import React, { useState } from "react";
import Image from "next/image";

type BottlePreviewProps = {
  ingredient: string;
  fragrance: string;
  color: string;
  brandName: string;
  brandDescription: string;
};

const BottlePreview: React.FC<BottlePreviewProps> = ({
  ingredient,
  fragrance,
  color,
  brandName,
  brandDescription,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleView3DModel = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredient,
          fragrance,
          color,
          brandName,
          brandDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-surface rounded-lg shadow-sm p-6 lg:p-8 w-full max-w-md text-center">
      <h2 className="text-2xl font-serif text-brand-text mb-4">
        Your Custom Bottle
      </h2>

      <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden bg-gray-200">
        {generatedImage ? (
          <img
            src={generatedImage}
            alt="Generated 3D model of the cosmetic bottle"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1887&auto=format&fit=crop"
            alt="Custom bottle preview"
          />
        )}
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white">Generating your 3D model...</p>
          </div>
        )}
      </div>

      <h3 className="text-xl font-serif text-brand-text">
        {brandName || "Your Brand Name"}
      </h3>

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

      <button
        onClick={handleView3DModel}
        disabled={isLoading || !brandName || !brandDescription}
        className="mt-6 w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating..." : "View Full 3D Model"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default BottlePreview;
