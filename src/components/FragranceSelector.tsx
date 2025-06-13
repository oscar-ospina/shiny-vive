import React from "react";
import OptionCard from "./OptionCard";

type FragranceSelectorProps = {
  setFragrance: (value: string) => void;
};

const FragranceSelector: React.FC<FragranceSelectorProps> = ({
  setFragrance,
}) => {
  const fragrances = [
    "Vanilla Bean",
    "Fresh Lavender",
    "Citrus Burst",
    "Sandalwood",
  ];

  return (
    <OptionCard
      title="Select Your Fragrance"
      description="Choose a signature scent that complements your personal style"
    >
      <div>
        <label
          htmlFor="fragrance-select"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Fragrance
        </label>
        <select
          id="fragrance-select"
          onChange={(e) => setFragrance(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
        >
          <option value="Not selected">Select a fragrance</option>
          {fragrances.map((frag) => (
            <option key={frag} value={frag}>
              {frag}
            </option>
          ))}
        </select>
      </div>
    </OptionCard>
  );
};

export default FragranceSelector;
