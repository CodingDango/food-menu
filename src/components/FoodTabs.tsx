import { cn } from "../lib/utils";
import type { FoodCategory } from "../types/types";
import { foodCategories } from "../lib/menu/categories/categories";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface FoodTabsProps {
  category: FoodCategory;
  onCategoryChange: (value: FoodCategory) => void;
}

export default function FoodTabs({
  category,
  onCategoryChange,
}: FoodTabsProps) {
  return (
    <RadioGroup
      value={category}
      onValueChange={(val) => onCategoryChange(val as FoodCategory)}
    >
      <div>
        <div className="flex">
          <div className="bg-card flex rounded-2xl p-space-xs gap-space-sm">
            {foodCategories.map((val) => {
              const isSelected = val.name === category;
              return (
                <Label
                  className={cn(
                    "bg-card rounded-2xl px-space-md py-space-sm flex gap-space-sm items-center cursor-pointer",
                    isSelected && "bg-muted",
                  )}
                >
                  <RadioGroupItem value={val.name} hidden />
                  <img
                    src={val.iconSrc}
                    className={cn("size-10 rounded-full drop-shadow-md")}
                  ></img>
                  <span className="capitalize font-medium text-base">
                    {val.name}
                  </span>
                </Label>
              );
            })}
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
