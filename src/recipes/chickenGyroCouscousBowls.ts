import {
    SHALLOT,
    ROMA_TOMATOES,
    PERSIAN_CUCUMBER,
    LEMON,
    DILL,
    ISRAELI_COUSCOUS,
    CHICKEN_STOCK_CONCENTRATE,
    CHICKEN_CUTLET,
    ZAATAR_SPICE_BLEND,
    FETA_CHEESE,
    SOUR_CREAM,
    HUMMUS,
} from '../food';
import { Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chicken gyro couscous bowls',
    ingredients: [
        {
            food: SHALLOT,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: DILL,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: ISRAELI_COUSCOUS,
            quantity: 2.5,
            unit: Unit.OZ,
        },
        {
            food: CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHICKEN_CUTLET,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            food: ZAATAR_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            food: SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: HUMMUS,
            quantity: 4,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
