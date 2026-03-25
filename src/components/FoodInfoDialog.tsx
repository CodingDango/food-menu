import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { toCurrency } from "../lib/utils";
import type { MenuItem } from "../types/types";

import FoodBadgeList from "./FoodBadgeList";
import FoodImage from "./FoodImage";

export default function FoodInfoDialog({ food }: { food: MenuItem }) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer absolute inset-0 rounded-2xl"></DialogTrigger>

      <DialogContent className="sm:max-w-3xl w-full lg:grid-cols-[1fr_300px]">
        <DialogHeader className="flex flex-col gap-y-space-md">
          <DialogTitle className="text-start capitalize text-2xl flex gap-space-md items-center">
            <div className="font-bold">{food.name}</div>
            <div className="font-bold text-primary text-end text-2xl">
              {toCurrency(food.price)}
            </div>
          </DialogTitle>

          <p className="text-start  text-muted-foreground">
            {food.description}
          </p>

          <FoodBadgeList foodBadges={food.foodBadges} />
        </DialogHeader>

        <div className="w-full md:w-75 h-55 relative shrink-0">
          <FoodImage
            src={food.imageSrc}
            alt="Burger"
            className="w-full h-full object-contain drop-shadow-xl scale-105  "
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
