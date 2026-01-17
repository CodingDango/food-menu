import type { MenuCategory } from "../../../types/types";

export const dessertsCategory: MenuCategory = {
  featured: {
    name: "Warm Fudge Brownie",
    description:
      "A rich, gooey chocolate brownie served warm, topped with a scoop of vanilla bean ice cream and a drizzle of salted caramel.",
    price: 5.99,
    imageSrc: "/dessert1.png",
    nutrients: [
      { name: "energy", value: "450 cal" },
      { name: "sugars", value: "38 g" },
      { name: "fats", value: "22 g" },
    ],
  },
  // A list of other available desserts
  list: [
    {
      name: "New York Cheesecake",
      imageSrc: "/dessert1.png",
      price: 4.99,
    },
    {
      name: "Chocolate Chip Cookie",
      imageSrc: "/dessert1.png",
      price: 1.99,
    },
    {
      name: "Apple Cinnamon Pie",
      imageSrc: "/dessert1.png",
      price: 4.49,
    },
    {
      name: "Mixed Berry Parfait",
      imageSrc: "/dessert1.png",
      price: 3.99,
    },
  ],
};