import React from "react";
import OptionCard from "./OptionCard";

type IngredientsSelectorProps = {
  setIngredient: (value: string) => void;
};

const IngredientsSelector: React.FC<IngredientsSelectorProps> = ({
  setIngredient,
}) => {
  const ingredients = ["Argan Oil", "Keratin", "Coconut Milk", "Shea Butter"];

  return (
    <OptionCard
      title="Choose Your Ingredients"
      description="Select premium ingredients to customize your hair treatment formula"
    >
      <div>
        <label
          htmlFor="ingredient-select"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Hair Treatment Ingredient
        </label>
        <select
          id="ingredient-select"
          onChange={(e) => setIngredient(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
        >
          <option value="Not selected">Select an ingredient</option>
          {ingredients.map((ing) => (
            <option key={ing} value={ing}>
              {ing}
            </option>
          ))}
        </select>
      </div>
    </OptionCard>
  );
};

export default IngredientsSelector;
