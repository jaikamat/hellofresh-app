import {
    SCALLION,
    JASMINE_RICE,
    ROMA_TOMATOES,
    KIWI,
    LIME,
    SOUR_CREAM,
    CHIPOTLE_POWDER,
    CHICKEN_BREAST,
    SOUTHWEST_SPICE_BLEND,
    CHICKEN_STOCK_CONCENTRATE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Surfs up chicken & rice bowl",
    ingredients: [
        {
            food: SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            food: ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: KIWI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: CHIPOTLE_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            food: CHICKEN_BREAST,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            food: SOUTHWEST_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
