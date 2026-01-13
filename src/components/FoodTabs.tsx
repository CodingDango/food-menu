import { cn } from "../lib/utils";
import type { FoodCategory } from "../types/types";
import { foodCategories } from "../lib/menu/categories";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface FoodTabsProps {
  category: FoodCategory;
  onCategoryChange: (value: FoodCategory) => void;
}

export default function FoodTabs({
  category,
  onCategoryChange
}: FoodTabsProps) {
  return (
    <RadioGroup
      value={category}
      onValueChange={val => onCategoryChange(val as FoodCategory)}
    >
      <div className="flex flex-col gap-lg">
        {foodCategories.map((val) => {
          const isSelected = val.name === category;
          return (
            <Label
              className={cn(
                "bg-card rounded-2xl px-md py-sm flex gap-lg items-center cursor-pointer",
                isSelected &&
                  "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              )}
            >
              <RadioGroupItem value={val.name} hidden />
              <div
                className={cn(
                  "w-10 h-10 rounded-full bg-muted",
                  isSelected && "bg-white"
                )}
              ></div>
              <span className="capitalize font-medium text-base">
                {val.name}
              </span>
            </Label>
          );
        })}
      </div>
    </RadioGroup>
  );
}
