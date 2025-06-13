import React from "react";
import OptionCard from "./OptionCard";

type ColorPickerProps = {
  setColor: (value: string) => void;
};

const colors = [
  { name: "Sunny Yellow", value: "yellow-400", hex: "#FACC15" },
  { name: "Ruby Red", value: "red-500", hex: "#EF4444" },
  { name: "Cool Gray", value: "gray-300", hex: "#D1D5DB" },
  { name: "Emerald Green", value: "green-400", hex: "#4ADE80" },
  { name: "Sapphire Blue", value: "blue-400", hex: "#60A5FA" },
];

const ColorPicker: React.FC<ColorPickerProps> = ({ setColor }) => {
  return (
    <OptionCard
      title="Pick Your Color"
      description="Choose a color that matches your hair tone and aesthetic preference"
    >
      <div className="flex items-center space-x-3">
        {colors.map((color) => (
          <label key={color.name} className="relative">
            <input
              type="radio"
              name="color-picker"
              value={color.name}
              className="absolute opacity-0 w-0 h-0"
              onChange={() => setColor(color.name)}
            />
            <div
              className={`w-10 h-10 rounded-full cursor-pointer ring-2 ring-transparent ring-offset-2 transition-all duration-200 ease-in-out hover:ring-offset-4 peer-checked:ring-brand-primary`}
              style={{ backgroundColor: color.hex }}
            ></div>
            <span className="sr-only">{color.name}</span>
          </label>
        ))}
      </div>
    </OptionCard>
  );
};

export default ColorPicker;
