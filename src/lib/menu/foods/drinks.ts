import type { MenuCategory } from "../../../types/types";

export const drinksCategory: MenuCategory = {
  featured: {
    name: "Classic Mango Lassi",
    description:
      "A refreshing and creamy yogurt-based drink, blended with sweet mangoes and a hint of cardamom.",
    price: 3.99,
    imageSrc: "/drink1.png", // Using the same placeholder as the featured burger
    nutrients: [
      { name: "energy", value: "250 cal" },
      { name: "protein", value: "8 g" },
      { name: "sugars", value: "25 g" },
    ],
  },
  // A list of other available drinks
  list: [
    {
      name: "Fountain Cola",
      imageSrc: "/drink1.png", // Using the list placeholder as requested
      price: 1.99,
    },
    {
      name: "Diet Cola",
      imageSrc: "/drink1.png",
      price: 1.99,
    },
    {
      name: "Sparkling Lemonade",
      imageSrc: "/drink1.png",
      price: 2.49,
    },
    {
      name: "Bottled Water",
      imageSrc: "/drink1.png",
      price: 1.49,
    },
  ],
};