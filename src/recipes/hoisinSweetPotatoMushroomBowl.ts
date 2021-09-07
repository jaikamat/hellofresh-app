import {
    SCALLION,
    FRESH_GINGER,
    SWEET_POTATO,
    CREMINI_MUSHROOM,
    BELL_PEPPER,
    JASMINE_RICE,
    HOISIN_SAUCE,
    MAYONNAISE,
    SOUR_CREAM,
    SRIRACHA,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Hoisin sweet potato & mushroom bowl",
    ingredients: [
        {
            food: SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: FRESH_GINGER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CREMINI_MUSHROOM,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            food: BELL_PEPPER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            food: HOISIN_SAUCE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: SRIRACHA,
            quantity: 1,
            unit: Unit.TSP,
        },
    ],
};

export default recipe;
