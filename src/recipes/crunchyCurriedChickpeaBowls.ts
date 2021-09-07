import {
    CHICKPEAS,
    CARROT,
    LEMON,
    KALE,
    GOLDEN_RAISINS,
    CURRY_POWDER,
    BASMATI_RICE,
    VEGETABLE_STOCK_CONCENTRATE,
    SHREDDED_RED_CABBAGE,
    SOUR_CREAM,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Crunchy curried chickpea bowls",
    directions:
        "https://www.hellofresh.com/recipes/crunchy-curried-chickpea-bowls-610178729143787c7859ba20",
    ingredients: [
        {
            food: CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            food: CARROT,
            quantity: 3,
            unit: Unit.OZ,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: KALE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: GOLDEN_RAISINS,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            food: CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SHREDDED_RED_CABBAGE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: SOUR_CREAM,
            quantity: 6,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
