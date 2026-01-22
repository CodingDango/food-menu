import { toCurrency } from "../lib/utils";
import type { MenuItem } from "../types/types";
import FoodBadgeList from "./FoodBadgeList";

export default function FoodHero({
  name,
  description = "No description",
  price,
  imageSrc,
  foodBadges,
}: MenuItem) {
  return (
    <div className="bg-card grid lg:grid-cols-[1fr_300px] p-space-md sm:p-space-lg rounded-2xl gap-space-xl">
      <div className="space-y-space-md">
        <div className="flex items-center gap-space-md">
          <h2 className="text-3xl font-semibold capitalize">{name}</h2>
          <span className="text-3xl text-primary font-bold">
            {toCurrency(price)}
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <FoodBadgeList foodBadges={foodBadges} />
      </div>

      <div className="flex flex-col gap-space-xs items-center">
        <div className="w-full md:w-75 h-60 relative shrink-0 scale-105">
          <img
            src={imageSrc}
            alt="Burger"
            className="w-full h-full object-contain drop-shadow-xl scale-110"
          />
        </div>
      </div>
    </div>
  );
}
