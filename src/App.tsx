import { Recipe, Ingredient, FoodCategory, Unit } from "./types";
import * as recipes from "./recipes";
import { useState } from "react";

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

function formatOutput(ingredients: Ingredient[]) {
    const output: Record<string, string[]> = {};

    Object.keys(FoodCategory).forEach((category) => {
        const categoryItems = ingredients.filter(
            (f) => f.food.category === category
        );
        if (categoryItems.length > 0) {
            const items = categoryItems.map((f) => {
                const foodName = `${prettyFoodName(f.food.name)}`;
                const unit = f.unit === Unit.INTEGER ? "" : ` ${f.unit}`;
                const amount = `${f.quantity}${unit}`;

                return `${amount} ${foodName}`;
            });

            output[category] = items;
        }
    });

    return output;
}

function App() {
    const allRecipes = Object.values(recipes);
    const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);

    const targetRecipes = allRecipes.filter((r) =>
        selectedRecipes.find((el) => r.name === el)
    );

    const output = formatOutput(createShoppingList(targetRecipes));

    return (
        <div>
            <label htmlFor="recipes">Recipe list</label>
            <select
                style={{ height: 400 }}
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
            <button onClick={() => setSelectedRecipes([])}>Reset</button>
            {Object.entries(output).map(([k, v]) => {
                return (
                    <pre key={k}>
                        <h3>{k}</h3>
                        {v.map((f) => (
                            <p key={f}>{f}</p>
                        ))}
                    </pre>
                );
            })}
        </div>
    );
}

export default App;
