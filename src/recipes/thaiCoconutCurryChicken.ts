import {
    BELL_PEPPER,
    CHICKEN_BREAST,
    CHICKEN_STOCK_CONCENTRATE,
    CHILI_PEPPER_FRESH,
    CILANTRO,
    COCONUT_MILK,
    CURRY_POWDER,
    JASMINE_RICE,
    LIME,
    SWEET_THAI_CHILI_SAUCE,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Thai coconut curry chicken",
    directions:
        "https://www.hellofresh.com/recipes/thai-coconut-curry-chicken-5fea59f795e99a13fb4bddf0",
    ingredients: [
        {
            food: JASMINE_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            food: BELL_PEPPER,
            quantity: 1,
            unit: Unit.INTEGER,
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
            food: CHILI_PEPPER_FRESH,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHICKEN_BREAST,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            food: CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: COCONUT_MILK,
            quantity: 0.66,
            unit: Unit.CUP,
        },
        {
            food: SWEET_THAI_CHILI_SAUCE,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            food: CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
