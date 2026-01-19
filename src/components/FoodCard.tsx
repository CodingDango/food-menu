import { Info } from "lucide-react";
import type { SimpleMenuItem } from "../types/types";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { getCurrencyUnit } from "../lib/utils";

interface FoodCardProps {
  food: SimpleMenuItem;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-card py-space-lg px-space-md pt-space-sm rounded-2xl relative">
      <div className="flex flex-col items-center gap-space-lg relative">
        <div className="w-[150px] h-[125px] relative">
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
            {food.price} {getCurrencyUnit()}
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

        <DialogContent className="sm:max-w-xl w-full">
          <DialogHeader className="flex flex-col gap-y-space-sm">
            <DialogTitle className="capitalize text-2xl flex gap-space-sm items-center">
              <span className="font-semibold">{food.name}</span>
              <span className="font-bold text-primary">{food.price} {getCurrencyUnit()}</span>
            </DialogTitle>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit magnam aspernatur non illum. Debitis!</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
