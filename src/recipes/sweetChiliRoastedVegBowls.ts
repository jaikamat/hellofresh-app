import {
    SWEET_POTATO,
    BUTTON_MUSHROOMS,
    GARLIC_POWDER,
    JASMINE_RICE,
    MAYONNAISE,
    CILANTRO,
    SWEET_SOY_GLAZE,
    SWEET_THAI_CHILI_SAUCE,
    RICE_WINE_VINEGAR,
    COLESLAW_MIX,
    CRISPY_FRIED_ONIONS,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Sweet chili roasted veg bowls",
    directions:
        "https://www.hellofresh.com/recipes/sweet-chili-roasted-veg-bowls-606cb3effda24c420770cf0b",
    ingredients: [
        {
            food: SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: BUTTON_MUSHROOMS,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            food: GARLIC_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            food: JASMINE_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            food: MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            food: CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: SWEET_SOY_GLAZE,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: SWEET_THAI_CHILI_SAUCE,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            food: RICE_WINE_VINEGAR,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: COLESLAW_MIX,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            food: CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
