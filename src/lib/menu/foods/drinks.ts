import type { MenuCategory } from "../../../types/types";
import { foodBadges } from "../badges/foodBadges";

export const drinksCategory: MenuCategory = {
  featured: {
    name: "Classic Mango Lassi",
    description:
      "A refreshing and creamy yogurt-based drink, blended with sweet mangoes and a hint of cardamom.",
    price: 3.99,
    imageSrc: "/drink1.png", // Using the same placeholder as the featured burger
    foodBadges: [foodBadges.fresh, foodBadges.cold, foodBadges.new],
  },
  // A list of other available drinks
  list: [
    {
      name: "Fountain Cola",
      description:
        "A crisp and refreshing classic cola served ice-cold with the perfect amount of carbonation.",
      imageSrc: "/drink1.png",
      price: 1.99,
      foodBadges: [foodBadges.cold, foodBadges.sweet],
    },
    {
      name: "Diet Cola",
      description:
        "All the bold, refreshing taste of a classic cola with zero calories and zero sugar.",
      imageSrc: "/drink1.png",
      price: 1.99,
      foodBadges: [foodBadges.cold, foodBadges.sugarFree, foodBadges.lowCal],
    },
    {
      name: "Bottled Water",
      description:
        "Pure, chilled spring water to keep you refreshed and hydrated throughout your meal.",
      imageSrc: "/drink1.png",
      price: 1.49,
      foodBadges: [foodBadges.cold, foodBadges.sugarFree],
    },
    {
      name: "Fountain Cola",
      description:
        "A crisp and refreshing classic cola served ice-cold with the perfect amount of carbonation.",
      imageSrc: "/drink1.png",
      price: 1.99,
      foodBadges: [foodBadges.cold, foodBadges.sweet],
    },
  ],
};
