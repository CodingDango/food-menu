import type { MenuItem } from "../types/types";
import { Button } from "./ui/button";

import { toCurrency } from "../lib/utils";
import { Info } from "lucide-react";

import FoodInfoDialog from "./FoodInfoDialog";
import FoodImage from "./FoodImage";

interface FoodCardProps {
  food: MenuItem;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-card p-space-md sm:py-space-lg sm:px-space-md pt-space-sm rounded-2xl relative">
      <div className="flex flex-col items-center gap-space-lg relative">
        <FoodImage
          src={food.imageSrc}
          className="w-38 h-32 relative shrink-0 scale-105 drop-shadow-xl"
          alt="Burger"
        />
        <div className="w-full flex flex-col items-center gap-space-xs">
          <p className="font-semibold text-xl text-center capitalize">
            {food.name}
          </p>

          <span className="text-2xl text-primary font-bold">
            {toCurrency(food.price)}
          </span>
        </div>

        <span className="absolute top-0 right-0">
          <Button
            variant={"outline"}
            size={"icon-sm"}
            className="border-0 shadow-sm"
            inert
          >
            <Info className="size-5 text-muted-foreground" />
          </Button>
        </span>
      </div>

      <FoodInfoDialog food={food} />
    </div>
  );
}
