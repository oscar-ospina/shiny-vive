import React from "react";

interface BrandInfoProps {
  setBrandName: (name: string) => void;
  setBrandDescription: (description: string) => void;
}

const BrandInfo: React.FC<BrandInfoProps> = ({
  setBrandName,
  setBrandDescription,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Brand</h2>
      <p className="text-gray-600 mb-6">
        Tell us about your brand or yourself.
      </p>

      <div className="mb-4">
        <label
          htmlFor="brandName"
          className="block text-gray-700 font-medium mb-2"
        >
          Brand Name or Your Name
        </label>
        <input
          type="text"
          id="brandName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Celestial Cosmetics"
          onChange={(e) => setBrandName(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="brandDescription"
          className="block text-gray-700 font-medium mb-2"
        >
          What is your brand about?
        </label>
        <textarea
          id="brandDescription"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Natural, vegan, and cruelty-free skincare."
          onChange={(e) => setBrandDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default BrandInfo;
