import type { MenuCategory } from "../../types/types";
import { foodBadges } from "../badges/foodBadges";

export const dessertsCategory: MenuCategory = {
  featured: {
    name: "Warm Fudge Brownie",
    description:
      "A rich, gooey chocolate brownie served warm, topped with a scoop of vanilla bean ice cream and a drizzle of salted caramel.",
    price: 5.99,
    imageSrc: "/menu/desserts/brownie.png",
    foodBadges: [foodBadges.bestSeller, foodBadges.creamy, foodBadges.sweet],
  },
  list: [
    {
      name: "Chocolate Chip Cookie",
      description:
        "A jumbo, soft-baked cookie loaded with premium semi-sweet chocolate chunks and a hint of Madagascar vanilla.",
      imageSrc: "/menu/desserts/cookie.png",
      price: 1.99,
      foodBadges: [foodBadges.sweet, foodBadges.fresh],
    },
    {
      name: "Apple Cinnamon Pie",
      description:
        "Warm, spiced Granny Smith apples baked inside a golden, flaky pastry crust and dusted with cinnamon sugar.",
      imageSrc: "/menu/desserts/apple-pie.png",
      price: 4.49,
      foodBadges: [foodBadges.sweet, foodBadges.new],
    },
    {
      name: "Mixed Berry Parfait",
      description:
        "Layers of creamy Greek yogurt, fresh seasonal berries, and crunchy honey-oat granola for a light, refreshing treat.",
      imageSrc: "/menu/desserts/mix-parfait.png",
      price: 3.99,
      foodBadges: [foodBadges.fresh, foodBadges.lowCal, foodBadges.veg],
    },
    {
      name: "Red Velvet Cupcake",
      description:
        "A light and fluffy cocoa-infused cake topped with a rich, velvety cream cheese frosting and a dash of red velvet crumbs.",
      imageSrc: "/menu/desserts/velvet-cupcake.png",
      price: 3.25,
      foodBadges: [foodBadges.sweet, foodBadges.creamy, foodBadges.new],
    },
  ],
};
