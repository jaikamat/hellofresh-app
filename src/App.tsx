import { Recipe, Ingredient, FoodCategory, Unit } from "./types";
import * as recipes from "./recipes";
import { useState } from "react";

/**
 * For each element in the recipe list
 * if it exists in output
 * add the qty
 * otherwise push it to output
 */
function createShoppingList(recipes: Recipe[]): Ingredient[] {
    const totalIngredients = recipes.reduce<Ingredient[]>(
        (acc, curr) => acc.concat(curr.ingredients),
        []
    );

    const output: Ingredient[] = [];

    totalIngredients.forEach((i) => {
        const ingredientLocation = output.findIndex(
            (o) => o.food.name === i.food.name
        );

        if (ingredientLocation > -1) {
            if (output[ingredientLocation].unit !== i.unit) {
                throw new Error(
                    `Unit mismatch detected in ingredient: ${i.food} | ${i.unit}, ${output[ingredientLocation].food} | ${output[ingredientLocation].unit}`
                );
            }
            output[ingredientLocation].quantity += i.quantity;
        } else {
            output.push(i);
        }
    });

    return output.sort((a, b) => a.food.name.localeCompare(b.food.name));
}

/**
 * Finds and replaces hyphens and replaces with strings, and correctly cases word
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

    console.log({ output });

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
