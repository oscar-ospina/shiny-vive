"use client";

import { useState } from "react";
import IngredientsSelector from "@/components/IngredientsSelector";
import FragranceSelector from "@/components/FragranceSelector";
import ColorPicker from "@/components/ColorPicker";
import BottlePreview from "@/components/BottlePreview";

export default function Home() {
  const [ingredient, setIngredient] = useState("Not selected");
  const [fragrance, setFragrance] = useState("Not selected");
  const [color, setColor] = useState("Not selected");

  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Options */}
          <div className="flex flex-col gap-8">
            <IngredientsSelector setIngredient={setIngredient} />
            <FragranceSelector setFragrance={setFragrance} />
            <ColorPicker setColor={setColor} />
          </div>

          {/* Right Column: Preview */}
          <div className="flex items-center justify-center">
            <BottlePreview
              ingredient={ingredient}
              fragrance={fragrance}
              color={color}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
