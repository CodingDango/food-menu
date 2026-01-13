import type { MenuCategory } from "../../types/types";

export const burgersCategory: MenuCategory = {
  featured: {
    name: "veggie burger",
    description:
      "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce and mayo.",
    price: 5.99,
    imageSrc: "/burger1.png",
    nutrients: [
      { name: "energy", value: "334 cal" },
      { name: "protein", value: "7 g" },
      { name: "fats", value: "12 g" },
    ],
  },
  list: [
    {
      name: "chicken burger",
      imageSrc: "/burger2.png",
      price: 4.99,
    },
    {
      name: "chicken burger",
      imageSrc: "/burger2.png",
      price: 4.99,
    },
    {
      name: "chicken burger",
      imageSrc: "/burger2.png",
      price: 4.99,
    },
    {
      name: "chicken burger",
      imageSrc: "/burger2.png",
      price: 4.99,
    },
    {
      name: "chicken burger",
      imageSrc: "/burger2.png",
      price: 4.99,
    },
  ],
};
