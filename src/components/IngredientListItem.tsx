import { Checkbox, ListItem, Typography, TypographyProps } from "@mui/material";
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

type StrikeProps = TypographyProps & { strike: boolean };

const Strike: React.FC<StrikeProps> = ({ strike, children, ...rest }) => {
    return (
        <Typography {...rest}>
            {strike ? <s>{children}</s> : children}
        </Typography>
    );
};

interface IngredientListItemProps {
    ingredient: Ingredient;
}

const IngredientListItem: React.FC<IngredientListItemProps> = ({
    ingredient,
}) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <ListItem disablePadding>
            <Checkbox
                color="secondary"
                checked={checked}
                onClick={() => setChecked(!checked)}
            />
            <Strike variant="body1" key={ingredient.food.name} strike={checked}>
                {ingredientLineItem(ingredient)}
            </Strike>
        </ListItem>
    );
};

export default IngredientListItem;
