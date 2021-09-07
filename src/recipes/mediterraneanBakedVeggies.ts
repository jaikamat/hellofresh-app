import {
    GARLIC_CLOVE,
    ASPARAGUS,
    THYME,
    GRAPE_TOMATOES,
    VEGETABLE_STOCK_CONCENTRATE,
    SCALLION,
    ISRAELI_COUSCOUS,
    SLICED_ALMONDS,
    FETA_CHEESE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Mediterranean baked veggies",
    ingredients: [
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: ASPARAGUS,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            food: THYME,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: ISRAELI_COUSCOUS,
            quantity: 6.25,
            unit: Unit.OZ,
        },
        {
            food: SLICED_ALMONDS,
            quantity: 0.5,
            unit: Unit.OZ,
        },
        {
            food: FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
