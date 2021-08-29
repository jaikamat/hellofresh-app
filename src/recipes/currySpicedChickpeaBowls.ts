import {
    GARLIC_CLOVE,
    CARROT,
    RED_ONION,
    BASMATI_RICE,
    VEGETABLE_STOCK_CONCENTRATE,
    CHICKPEAS,
    CURRY_POWDER,
    GRAPE_TOMATOES,
    PERSIAN_CUCUMBER,
    CILANTRO,
    LEMON,
    CHILI_PEPPER_FRESH,
    YOGURT,
    SOUR_CREAM,
} from '../food';
import { Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'curry-spiced chickpea bowls',
    ingredients: [
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CARROT,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            food: RED_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        // Find measurement for this from HF
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            food: CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHILI_PEPPER_FRESH,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: YOGURT,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
