import { Checkbox, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import { Ingredient, Unit } from "../types";

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
    const unit =
        ingredient.unit === Unit.INTEGER
            ? ""
            : ` ${ingredient.unit.toLowerCase()}`;
    const amount = `${ingredient.quantity}${unit}`;

    return `${amount} ${foodName}`;
}

interface Props {
    ingredient: Ingredient;
}

const IngredientListItem: React.FC<Props> = ({ ingredient }) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <ListItem disablePadding>
            <Checkbox
                color="secondary"
                checked={checked}
                onClick={() => setChecked(!checked)}
            />
            <Typography variant="body1" key={ingredient.food.name}>
                {ingredientLineItem(ingredient)}
            </Typography>
        </ListItem>
    );
};

export default IngredientListItem;
