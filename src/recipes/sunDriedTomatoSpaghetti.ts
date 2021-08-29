import {
    CHIVES,
    GARLIC_CLOVE,
    GRAPE_TOMATOES,
    ITALIAN_PARSLEY,
    PARMESAN_CHEESE,
    SLICED_ALMONDS,
    SOUR_CREAM,
    SPAGHETTI,
    SUN_DRIED_TOMATOES,
    VEGETABLE_STOCK_CONCENTRATE,
} from '../food';
import { Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'sun-dried tomato spaghetti',
    ingredients: [
        {
            food: SUN_DRIED_TOMATOES,
            quantity: 1.5,
            unit: Unit.OZ,
        },
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: CHIVES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: ITALIAN_PARSLEY,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SPAGHETTI,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            food: SLICED_ALMONDS,
            quantity: 0.5,
            unit: Unit.OZ,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SOUR_CREAM,
            quantity: 2,
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
