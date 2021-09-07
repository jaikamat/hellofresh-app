import {
    BASMATI_RICE,
    CHICKPEAS,
    CILANTRO,
    DRIED_APRICOTS,
    GARLIC_CLOVE,
    JALAPENO,
    LEMON,
    SLICED_ALMONDS,
    SOUR_CREAM,
    TUNISIAN_SPICE_BLEND,
    VEGETABLE_STOCK_CONCENTRATE,
    YELLOW_ONION,
    ZUCCHINI,
} from "../food";
import { Recipe, Unit } from "../types";

const recipe: Recipe = {
    name: "Apricot, almond, & chickpea tagine",
    ingredients: [
        {
            food: YELLOW_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            food: GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: JALAPENO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            food: CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            food: BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            food: VEGETABLE_STOCK_CONCENTRATE,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            food: SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            food: TUNISIAN_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            food: SLICED_ALMONDS,
            quantity: 0.5,
            unit: Unit.OZ,
        },
        {
            food: DRIED_APRICOTS,
            quantity: 1,
            unit: Unit.OZ,
        },
    ],
};

export default recipe;
