import {
    BUTTON_MUSHROOMS,
    GARLIC_POWDER,
    GNOCCHI,
    PANKO_BREADCRUMBS,
    PARMESAN_CHEESE,
    ROMA_TOMATOES,
    SCALLION,
    SOUR_CREAM,
    TRUFFLE_ZEST,
    VEGETABLE_STOCK_CONCENTRATE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Triple mushroom truffle gnocchi",
    ingredients: [
        {
            food: BUTTON_MUSHROOMS,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            food: SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: PANKO_BREADCRUMBS,
            quantity: 0.25,
            unit: Unit.CUP,
        },
        {
            food: GARLIC_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: PARMESAN_CHEESE,
            quantity: 0.25,
            unit: Unit.CUP,
        },
        {
            food: TRUFFLE_ZEST,
            quantity: 2,
            unit: Unit.GRAM,
        },
        {
            food: GNOCCHI,
            quantity: 8.8,
            unit: Unit.OZ,
        },
    ],
};

export default recipe;
