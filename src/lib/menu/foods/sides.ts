import type { MenuCategory } from "../../../types/types";
import { foodBadges } from "../badges/foodBadges";

export const sidesCategory: MenuCategory = {
  featured: {
    name: "Garlic Parmesan Fries",
    description:
      "Golden crispy fries tossed in roasted garlic butter, topped with aged Parmesan cheese and fresh parsley.",
    price: 4.99,
    imageSrc: "/side1.png",
    foodBadges: [foodBadges.cheesy, foodBadges.bestSeller, foodBadges.crispy],
  },
  list: [
    {
      name: "Classic Salted Fries",
      description: "Perfectly fried, golden-brown potatoes lightly seasoned with premium sea salt for a timeless crunch.",
      imageSrc: "/side1.png",
      price: 2.99,
      foodBadges: [foodBadges.veg, foodBadges.crispy],
    },
    {
      name: "Sweet Potato Fries",
      description: "Savory and sweet potato strips fried to perfection, offering a crisp exterior and a soft, fluffy interior.",
      imageSrc: "/side1.png",
      price: 3.99,
      foodBadges: [foodBadges.veg, foodBadges.new],
    },
    {
      name: "Crispy Onion Rings",
      description: "Thick-cut sweet onions dipped in our signature batter and fried until golden brown and satisfyingly crunchy.",
      imageSrc: "/side1.png",
      price: 4.49,
      foodBadges: [foodBadges.crispy, foodBadges.veg],
    },
    {
      name: "Creamy Coleslaw",
      description: "A refreshing blend of freshly shredded cabbage and carrots tossed in our house-made creamy and tangy dressing.",
      imageSrc: "/side1.png",
      price: 2.49,
      foodBadges: [foodBadges.creamy, foodBadges.lowCal, foodBadges.veg],
    },
    {
      name: "Creamy Coleslaw",
      description: "A refreshing blend of freshly shredded cabbage and carrots tossed in our house-made creamy and tangy dressing.",
      imageSrc: "/side1.png",
      price: 2.49,
      foodBadges: [foodBadges.creamy, foodBadges.lowCal, foodBadges.veg],
    },
  ],
};