import { Recipe, Ingredient } from "./types";
import * as recipes from "./recipes";
import { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material";
import MultiSelectDialog from "./components/MultiSelectDialog";
import IngredientListItem from "./components/IngredientListItem";

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

    if (selectedRecipes.length === 0) {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: "100vh" }}
            >
                <Box sx={{ pb: 3 }}>
                    <Typography variant="h6" color="GrayText">
                        <em>"Great food is simple"</em>
                    </Typography>
                </Box>
                <MultiSelectDialog
                    label="Select recipes"
                    value={selectedRecipes}
                    onChange={(v) => setSelectedRecipes(v)}
                    options={allRecipes.map(({ name }) => name)}
                />
            </Grid>
        );
    }

    return (
        <Container sx={{ mt: 3, mb: 3 }}>
            <Grid container justifyContent="center">
                <Stack>
                    <MultiSelectDialog
                        label="Edit selection"
                        value={selectedRecipes}
                        onChange={(v) => setSelectedRecipes(v)}
                        options={allRecipes.map(({ name }) => name)}
                    />
                    {Object.entries(output).map(([category, ingredients]) => {
                        return (
                            <Stack key={category}>
                                <Typography variant="h6">{category}</Typography>
                                <List>
                                    {ingredients.map((ingredient) => (
                                        <IngredientListItem
                                            ingredient={ingredient}
                                        />
                                    ))}
                                </List>
                            </Stack>
                        );
                    })}
                    {targetRecipes.length > 0 && (
                        <div>
                            <Typography variant="h6">
                                Selected recipes
                            </Typography>
                            <List>
                                {targetRecipes.map((tr) => {
                                    const link = tr.directions ? (
                                        <Link
                                            href={tr.directions}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {tr.name}
                                        </Link>
                                    ) : (
                                        <>{tr.name} (link unavailable)</>
                                    );

                                    if (tr.directions) {
                                        return (
                                            <ListItem disablePadding>
                                                {link}
                                            </ListItem>
                                        );
                                    }

                                    return (
                                        <ListItem disablePadding>
                                            {link}
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </div>
                    )}
                </Stack>
            </Grid>
        </Container>
    );
}

export default App;
