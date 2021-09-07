import {
    CHICKEN_CUTLET,
    LEMON,
    JASMINE_RICE,
    DILL,
    GARLIC_POWDER,
    PERSIAN_CUCUMBER,
    ROMA_TOMATOES,
    SHALLOT,
    SHAWARMA_SPICE_BLEND,
    SOUR_CREAM,
    YOGURT,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Shawarma-spiced chicken",
    directions:
        "https://www.hellofresh.com/recipes/shawarma-spiced-chicken-6022a8fecc8aeb3ff86eed92",
    ingredients: [
        {
            food: CHICKEN_CUTLET,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            food: YOGURT,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: SHAWARMA_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: GARLIC_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            food: PERSIAN_CUCUMBER,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SHALLOT,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: DILL,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: JASMINE_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
