import { Recipe, Ingredient, Unit } from "./types";
import * as recipes from "./recipes";
import { useState } from "react";
import "./index.css";
import "./style.css";

/**
 * This function takes in all our ingredients and sums them
 */
function createShoppingList(recipes: Recipe[]): Ingredient[] {
    const totalIngredients = recipes.flatMap((r) => r.ingredients);

    const cache: Record<string, Ingredient[]> = {};

    // Store the ingredients in the cache to group them
    for (let i = 0; i < totalIngredients.length; i++) {
        const currentIngedient = totalIngredients[i];
        const foodName = currentIngedient.food.name;

        if (foodName in cache) {
            cache[foodName].push(currentIngedient);
        } else {
            cache[foodName] = [currentIngedient];
        }
    }

    // Reduce the group to add quantities
    const reduced: Ingredient[] = Object.values(cache).map((group) => {
        // Ensure that all array elements have the same unit
        if (!group.every((i) => i.unit === group[0].unit)) {
            throw new Error(`Unit mismatch in ${JSON.stringify(group)}`);
        }

        const totalQuantity = group.reduce(
            (acc, curr) => acc + curr.quantity,
            0
        );

        return {
            ...group[0],
            quantity: totalQuantity,
        };
    });

    return reduced.sort((a, b) => a.food.name.localeCompare(b.food.name));
}

/**
 * Finds and replaces hyphens and replaces with strings, and correctly cases word.
 */
function prettyFoodName(name: string) {
    const transformed = name
        .split("_")
        .map((s) => s.toLowerCase())
        .join(" ");

    return `${transformed}`;
}

function ingredientLineItem(ingredient: Ingredient) {
    const foodName = `${prettyFoodName(ingredient.food.name)}`;
    const unit = ingredient.unit === Unit.INTEGER ? "" : ` ${ingredient.unit}`;
    const amount = `${ingredient.quantity}${unit}`;

    return `${amount} ${foodName}`;
}

type FoodGroup = Record<string, Ingredient[]>;

function groupByCategory(ingredients: Ingredient[]): FoodGroup {
    const output: FoodGroup = {};

    // Group the ingredients by category
    for (let i = 0; i < ingredients.length; i++) {
        const currentIngredient = ingredients[i];
        const category = currentIngredient.food.category;

        if (category in output) {
            output[category].push(currentIngredient);
        } else {
            output[category] = [currentIngredient];
        }
    }

    return output;
}

function App() {
    const allRecipes = Object.values(recipes);
    const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);

    const targetRecipes = allRecipes.filter((r) =>
        selectedRecipes.find((el) => r.name === el)
    );

    const output = groupByCategory(createShoppingList(targetRecipes));

    return (
        <div className="Container">
            <div className="FlexContainer">
                <div className="FlexItem">
                    <div>Select some recipes</div>
                    <select
                        className="SelectBox"
                        id="recipes"
                        multiple
                        value={selectedRecipes}
                        onChange={(e) => {
                            const val = Array.from(
                                e.target.selectedOptions,
                                (opt) => opt.value
                            );
                            setSelectedRecipes(val);
                        }}
                    >
                        {allRecipes.map((k) => {
                            return (
                                <option value={k.name} key={k.name}>
                                    {k.name}
                                </option>
                            );
                        })}
                    </select>
                    <div>
                        <button onClick={() => setSelectedRecipes([])}>
                            Reset
                        </button>
                    </div>
                </div>
                <div className="FlexItem">
                    {Object.entries(output).map(([k, v]) => {
                        return (
                            <div key={k}>
                                <h3 className="Header">{k}</h3>
                                <div className="ListContainer">
                                    {v.map((f) => (
                                        <p key={f.food.name}>
                                            {ingredientLineItem(f)}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
