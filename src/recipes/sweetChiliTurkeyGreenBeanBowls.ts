import {
    CILANTRO,
    CRISPY_FRIED_ONIONS,
    GREEN_BEANS,
    GROUND_TURKEY,
    JASMINE_RICE,
    LIME,
    SWEET_SOY_GLAZE,
    SWEET_THAI_CHILI_SAUCE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Sweet chili turkey & green bean bowls",
    directions:
        "https://www.hellofresh.com/recipes/sweet-chili-pork-green-bean-bowls-5fd913fd4083e0249b5ad5e3",
    ingredients: [
        {
            food: JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            food: GREEN_BEANS,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            food: LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: GROUND_TURKEY,
            quantity: 10,
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
        // Find measurement for this from HF
        {
            food: CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
