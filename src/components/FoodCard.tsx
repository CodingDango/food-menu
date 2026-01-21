import type { MenuItem } from "../types/types";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn, toCurrency } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Info } from "lucide-react";
import FoodBadgeList from "./FoodBadgeList";

interface FoodCardProps {
  food: MenuItem;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-card p-space-md sm:py-space-lg sm:px-space-md pt-space-sm rounded-2xl relative">
      <div className="flex flex-col items-center gap-space-lg relative">
        <div className="w-38 h-32 relative">
          <img
            src={food.imageSrc}
            className="object-contain drop-shadow-2xl absolute inset-0 aspect-square"
          />
        </div>

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
      <Dialog>
        <DialogTrigger className="absolute inset-0 rounded-2xl"></DialogTrigger>

        <DialogContent className="sm:max-w-3xl w-full lg:grid-cols-[1fr_300px]">
          <DialogHeader className="flex flex-col gap-y-space-md">
            <DialogTitle className="text-start capitalize text-2xl flex gap-space-md items-center">
              <div className="font-bold">{food.name}</div>
              <div className="font-bold text-primary text-end text-2xl">
                {toCurrency(food.price)}
              </div>
            </DialogTitle>

            <p className="text-start  text-muted-foreground">{food.description}</p>

            <FoodBadgeList foodBadges={food.foodBadges}/>
          </DialogHeader>

          <div className="w-full md:w-75 h-55 relative shrink-0">
            <img
              src={food.imageSrc}
              alt="Burger"
              className="w-full h-full object-contain drop-shadow-xl scale-105  "
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
