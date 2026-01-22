// foodBadges.ts

import type { FoodBadge } from "../../types/types";

// 1. Define your Color Themes (Pastel BG + Strong Text)
const themes = {
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  yellow: "bg-amber-100 text-amber-800", // Amber reads better than yellow on white
  purple: "bg-purple-100 text-purple-700",
};

// 2. The Badge Library
export const foodBadges: Record<string, FoodBadge> = {
  // --- FLAVOR & HEAT (Red) ---
  spicy: { 
    label: "Spicy", 
    className: themes.red 
  },
  hot: { 
    label: "Extra Hot", 
    className: themes.red 
  },
  bbq: { 
    label: "BBQ Flavor", 
    className: themes.red 
  },

  // --- DIETARY & HEALTH (Green) ---
  veg: { 
    label: "Vegetarian", 
    className: themes.green 
  },
  vegan: { 
    label: "Vegan", 
    className: themes.green 
  },
  glutenFree: { 
    label: "Gluten Free", 
    className: themes.green 
  },
  fresh: { 
    label: "Fresh Ingredients", 
    className: themes.green 
  },

  // --- NUTRITION & TEMPERATURE (Blue) ---
  protein: { 
    label: "High Protein", 
    className: themes.blue 
  },
  sugarFree: { 
    label: "Sugar Free", 
    className: themes.blue 
  },
  cold: { 
    label: "Ice Cold", 
    className: themes.blue 
  },
  lowCal: { 
    label: "Low Calorie", 
    className: themes.blue 
  },

  // --- TEXTURE & POPULARITY (Yellow/Amber) ---
  bestSeller: { 
    label: "Best Seller", 
    className: themes.yellow 
  },
  crispy: { 
    label: "Crispy", 
    className: themes.yellow 
  },
  cheesy: { 
    label: "Cheesy", 
    className: themes.yellow 
  },
  new: { 
    label: "New Item", 
    className: themes.yellow 
  },

  // --- DESSERT (Purple) ---
  sweet: { 
    label: "Sweet", 
    className: themes.purple 
  },
  creamy: { 
    label: "Creamy", 
    className: themes.purple 
  },
};