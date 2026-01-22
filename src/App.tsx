import FoodTabs from "./components/FoodTabs";
import FoodHero from "./components/FoodHero";
import FoodGrid from "./components/FoodGrid";
import MenuHeading from "./components/MenuHeading";

import { AnimatePresence, motion } from "motion/react";
import type { FoodCategory } from "./types/types";
import { useMemo, useState } from "react";
import { foodMenu } from "./lib/menu";

export default function Menu() {
  const [foodCategory, setFoodCategory] = useState<FoodCategory>("burgers");

  const { featured: featuredFood, list: foods } = useMemo(
    () => foodMenu[foodCategory] ?? {},
    [foodCategory],
  );

  return (
    <div className="p-space-md py-space-lg pb-space-2xl sm:p-space-lg md:p-space-xl lg:p-space-2xl grid place-items-center font-main ">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col gap-space-xl items-center lg:items-start">
          <MenuHeading />

          <FoodTabs
            category={foodCategory}
            onCategoryChange={setFoodCategory}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={foodCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-space-lg"
            >
              {featuredFood && <FoodHero {...featuredFood} />}
              {foods && <FoodGrid foods={foods} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
