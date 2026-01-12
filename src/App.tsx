import FoodTabs from "./components/FoodTabs";
import FoodHero from "./components/FoodHero";
import FoodGrid from "./components/FoodGrid";
import MenuHeading from "./components/MenuHeading";
import type { Food } from "./types/types";

const BURGER_HERO: Food = {
  name: "veggie burger",
  description:
    "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce and mayo.",
  price: 5.99,
  imageSrc: "/burger1.png",
  nutrients: [
    { name: "energy", value: "334 kCal" },
    { name: "protein", value: "7 gm" },
    { name: "fats", value: "12 gm" },
  ],
};

const BURGERS: Food[] = [
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
];

export default function Menu() {
  return (
    <div className="p-2xl grid place-items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col gap-2xl">
          <MenuHeading />

          <div className="grid grid-cols-[1fr_3fr] gap-2xl">
            <FoodTabs />

            <div className="flex flex-col gap-lg">
              <FoodHero {...BURGER_HERO} />
              <FoodGrid foods={BURGERS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
