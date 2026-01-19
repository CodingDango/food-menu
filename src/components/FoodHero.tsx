import type { FeaturedMenuItem } from "../types/types";
import { nutrientIcons } from "../lib/nutrients/icons";
import { getCurrencyUnit } from "../lib/utils";

export default function FoodHero({
  name,
  description = "No description",
  price,
  imageSrc,
  nutrients = [],
}: FeaturedMenuItem) {
  return (
    <div className="bg-card grid grid-cols-[1fr_300px] p-space-lg rounded-2xl gap-sm  ">
      <div className="space-y-space-md">
        <div className="flex items-center gap-space-lg">
          <h2 className="text-3xl font-semibold capitalize">{name}</h2>
          <span className="text-3xl text-primary font-bold">{price} {getCurrencyUnit()}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>

        <div className="bg-secondary rounded-2xl overflow-hidden justify-between inline-block">
          <div className="grid grid-cols-3">
            {nutrients.map((nutrient) => {
              const Icon = nutrientIcons[nutrient.name];

              return (
                <div className="py-space-md flex flex-col gap-space-sm items-center text-center">
                  <div className="px-space-lg font-semibold">
                    <div className="flex flex-col items-center">
                      {<Icon size={22}/>}
                      <span className="capitalize">{nutrient.name}</span>
                    </div>
                    <span className="text-xl text-primary">
                      {nutrient.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-xs">
        <div className="w-full md:w-[300px] h-[250px] relative flex-shrink-0">
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
