import type { MenuCategory } from "../../../types/types";

export const sidesCategory: MenuCategory = {
  featured: {
    name: "Garlic Parmesan Fries",
    description:
      "Golden crispy fries tossed in roasted garlic butter, topped with aged Parmesan cheese and fresh parsley.",
    price: 4.99,
    imageSrc: "/side1.png", 
    nutrients: [
      { name: "energy", value: "380 cal" },
      { name: "protein", value: "5 g" },
      { name: "fats", value: "18 g" },
    ],
  },
  // A list of other available sides
  list: [
    {
      name: "Classic Salted Fries",
      imageSrc: "/side1.png",
      price: 2.99,
    },
    {
      name: "Sweet Potato Fries",
      imageSrc: "/side1.png",
      price: 3.99,
    },
    {
      name: "Crispy Onion Rings",
      imageSrc: "/side1.png",
      price: 4.49,
    },
    {
      name: "Creamy Coleslaw",
      imageSrc: "/side1.png",
      price: 2.49,
    },
  ],
};