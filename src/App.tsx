import FoodTabs from "./components/FoodTabs";
import FoodHero from "./components/FoodHero";
import FoodGrid from "./components/FoodGrid";
import MenuHeading from "./components/MenuHeading";

import type { FoodCategory } from "./types/types";
import { useMemo, useState } from "react";
import { foodMenu } from "./lib/menu/foods";

export default function Menu() {
  const [foodCategory, setFoodCategory] = useState<FoodCategory>("burgers");

  const { featured: featuredFood, list: foods } = useMemo(
    () => foodMenu[foodCategory] ?? {},
    [foodCategory]
  );

  return (
    <div className="p-2xl grid place-items-center font-main">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col gap-2xl">
          <MenuHeading />

          <div className="grid grid-cols-[1fr_3fr] gap-2xl">
            <FoodTabs
              category={foodCategory}
              onCategoryChange={setFoodCategory}
            />

            <div className="flex flex-col gap-lg">
              {featuredFood && <FoodHero {...featuredFood} />}
              {foods && <FoodGrid foods={foods} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
