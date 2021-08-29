import {
    CHIVES,
    CREMINI_MUSHROOM,
    GRAPE_TOMATOES,
    ITALIAN_SEASONING,
    LEMON,
    PARMESAN_CHEESE,
    PENNE,
    SOUR_CREAM,
    VEGETABLE_STOCK_CONCENTRATE,
    ZUCCHINI,
} from '../food';
import { Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'silky sicilian penne',
    ingredients: [
        {
            food: ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CREMINI_MUSHROOM,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: CHIVES,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: PENNE,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            food: ITALIAN_SEASONING,
            quantity: 1,
            unit: Unit.TBSP,
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
    ],
};

export default recipe;
