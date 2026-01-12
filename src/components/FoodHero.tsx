import { FlameIcon } from "lucide-react";
import type { Food } from "../types/types";

export default function FoodHero({
  name,
  description = "No description",
  price,
  imageSrc,
  nutrients = [],
}: Food) {
  return (
    <div className="bg-card grid grid-cols-[1fr_300px] p-lg rounded-2xl gap-sm  ">
      <div className="space-y-md">
        <div className="flex items-center gap-lg">
          <h2 className="text-3xl font-medium capitalize">{name}</h2>
          <span className="text-3xl text-primary font-bold">
            {price} $
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>

        <div className="bg-secondary rounded-2xl overflow-hidden justify-between inline-block">
          <div className="grid grid-cols-3">
            {nutrients.map((nutrient) => (
              <div className="py-md flex flex-col gap-xs items-center text-center">
                <div className="px-lg">
                  <div className="flex flex-col items-center">
                    <FlameIcon />
                    <span className="font-medium capitalize">
                      {nutrient.name}
                    </span>
                  </div>
                  <span className="text-xl font-medium text-primary">
                    {nutrient.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <div className="w-full md:w-[300px] h-[250px] relative flex-shrink-0">
          <img
            src={imageSrc}
            alt="Burger"
            className="w-full h-full object-contain drop-shadow-xl scale-125"
          />
        </div>
      </div>
    </div>
  );
}
