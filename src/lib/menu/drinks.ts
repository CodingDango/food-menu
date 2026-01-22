import type { MenuCategory } from "../../types/types";
import { foodBadges } from "../badges/foodBadges";

export const drinksCategory: MenuCategory = {
  featured: {
    name: "Mango Lassi",
    description:
      "A refreshing and creamy yogurt-based drink, blended with sweet mangoes and a hint of cardamom.",
    price: 3.99,
    imageSrc: "/menu/drinks/mango-lassi.png", // Using the same placeholder as the featured burger
    foodBadges: [foodBadges.fresh, foodBadges.cold, foodBadges.new],
  },
  // A list of other available drinks
  list: [
    {
      name: "Classic Cola",
      description:
        "A crisp and refreshing classic cola served ice-cold with the perfect amount of carbonation.",
      imageSrc: "/menu/drinks/cola.png",
      price: 1.99,
      foodBadges: [foodBadges.cold, foodBadges.sweet],
    },
    {
      name: "Diet Cola",
      description:
        "All the bold, refreshing taste of a classic cola with zero calories and zero sugar.",
      imageSrc: "/menu/drinks/diet-cola.png",
      price: 1.99,
      foodBadges: [foodBadges.cold, foodBadges.sugarFree, foodBadges.lowCal],
    },
    {
      name: "Iced Peach Tea",
      description:
        "Freshly brewed black tea infused with natural peach essence, served chilled over ice for a fruity finish.",
      imageSrc: "/menu/drinks/iced-peach.png",
      price: 2.49,
      foodBadges: [foodBadges.cold, foodBadges.fresh, foodBadges.lowCal],
    },
    {
      name: "Bottled Water",
      description:
        "Pure, chilled spring water to keep you refreshed and hydrated throughout your meal.",
      imageSrc: "/menu/drinks/water.png",
      price: 1.29,
      foodBadges: [foodBadges.cold, foodBadges.sugarFree],
    },
  ],
};
