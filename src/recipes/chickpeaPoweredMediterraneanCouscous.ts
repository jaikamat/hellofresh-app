import {
    ZUCCHINI,
    GRAPE_TOMATOES,
    THYME,
    GARLIC_CLOVE,
    SCALLION,
    LEMON,
    CHICKPEAS,
    SMOKED_PAPRIKA,
    ISRAELI_COUSCOUS,
    VEGETABLE_STOCK_CONCENTRATE,
    FETA_CHEESE,
} from '../food';
import { Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chickpea-powered mediterranean couscous',
    ingredients: [
        {
            food: ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: THYME,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            food: SMOKED_PAPRIKA,
            quantity: 1,
            unit: Unit.TSP,
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
            food: FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
