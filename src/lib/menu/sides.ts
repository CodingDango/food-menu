import type { MenuCategory } from "../../types/types";
import { foodBadges } from "../badges/foodBadges";

export const sidesCategory: MenuCategory = {
  featured: {
    name: "Garlic Parmesan Fries",
    description:
      "Golden crispy fries tossed in roasted garlic butter, topped with aged Parmesan cheese and fresh parsley.",
    price: 4.99,
    imageSrc: "/menu/sides/fries.png",
    foodBadges: [foodBadges.cheesy, foodBadges.bestSeller, foodBadges.crispy],
  },
  list: [
    {
      name: "Crispy Onion Rings",
      description:
        "Thick-cut sweet onions dipped in our signature batter and fried until golden brown and satisfyingly crunchy.",
      imageSrc: "/menu/sides/onion-rings.png",
      price: 4.49,
      foodBadges: [foodBadges.crispy, foodBadges.veg],
    },
    {
      name: "Mozzarella Cheese Sticks",
      description:
        "Golden-brown breaded mozzarella sticks with a gooey, melted center. Served with a side of tangy marinara sauce.",
      imageSrc: "/menu/sides/mozarella-sticks.png", // Replace with appropriate image if available
      price: 5.49,
      foodBadges: [foodBadges.cheesy, foodBadges.crispy, foodBadges.bestSeller],
    },
    {
      name: "Garden Fresh Salad",
      description:
        "A light and refreshing mix of crisp seasonal greens, cherry tomatoes, and cucumbers served with a balsamic vinaigrette.",
      imageSrc: "/menu/sides/garden-salad.png", // Replace with appropriate image if available
      price: 3.99,
      foodBadges: [foodBadges.fresh, foodBadges.vegan, foodBadges.lowCal],
    },
    {
      name: "Spicy Seasoned Wedges",
      description:
        "Thick-cut potato wedges coated in a zesty blend of paprika, garlic, and cayenne pepper, fried until crispy on the outside and fluffy inside.",
      imageSrc: "/menu/sides/wedges.png",
      price: 3.99,
      foodBadges: [foodBadges.spicy, foodBadges.crispy, foodBadges.veg],
    },
  ],
};
