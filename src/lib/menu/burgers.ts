  import type { MenuCategory } from "../../types/types";
  import { foodBadges } from "../badges/foodBadges";

  export const burgersCategory: MenuCategory = {
    featured: {
      name: "Veggie Burger",
      description:
        "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce and mayo.",
      price: 5.99,
      imageSrc: "/menu/burgers/veggie.png",
      foodBadges: [foodBadges.veg, foodBadges.fresh],
    },

    list: [
      {
        name: "Classic Crispy Chicken Burger",
        description:
          "A tender, golden-fried chicken breast topped with crisp lettuce, ripe tomatoes, and our signature creamy mayo on a toasted brioche bun.",
        imageSrc: "/menu/burgers/chicken.png",
        price: 4.99,
        foodBadges: [foodBadges.crispy, foodBadges.bestSeller],
      },
      {
        name: "Spicy Zinger Burger",
        description:
          "Fiery buttermilk-marinated chicken breast with a spicy breading, layered with cooling coleslaw and zesty jalapeño aioli.",
        imageSrc: "/menu/burgers/zinger.png",
        price: 4.99,
        foodBadges: [foodBadges.spicy, foodBadges.hot],
      },
      {
        name: "BBQ Smokehouse Chicken Burger",
        description:
          "Crispy chicken breast smothered in smoky hickory BBQ sauce, topped with melted cheddar cheese and crunchy fried onion strings.",
        imageSrc: "/menu/burgers/bbq.png",
        price: 4.99,
        foodBadges: [foodBadges.bbq, foodBadges.cheesy],
      },
      {
        name: "California Chicken Burger",
        description:
          "Southern-style fried chicken topped with fresh smashed avocado, crispy bacon, and a drizzle of ranch dressing.",
        imageSrc: "/menu/burgers/california.png",
        price: 4.99,
        foodBadges: [foodBadges.new, foodBadges.creamy],
      },
    ],
  };