import {
    ZUCCHINI,
    ITALIAN_SEASONING,
    GARLIC_CLOVE,
    ROMA_TOMATOES,
    ISRAELI_COUSCOUS,
    VEGETABLE_STOCK_CONCENTRATE,
    PARMESAN_CHEESE,
    BALSAMIC_GLAZE,
    CHILI_FLAKES,
    MOZZARELLA_CHEESE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Bruschetta zucchini boats",
    ingredients: [
        {
            food: ZUCCHINI,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: ITALIAN_SEASONING,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: ROMA_TOMATOES,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: ISRAELI_COUSCOUS,
            quantity: 5,
            unit: Unit.OZ,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: PARMESAN_CHEESE,
            quantity: 0.25,
            unit: Unit.CUP,
        },
        {
            food: BALSAMIC_GLAZE,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: CHILI_FLAKES,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            food: MOZZARELLA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
