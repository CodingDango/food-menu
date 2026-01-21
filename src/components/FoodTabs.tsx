import { motion } from "motion/react";
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
      className="flex" // Center the tabs
    >
      {/* Container: Remove the background color if you want a cleaner look, or keep it light */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-space-sm lg:gap-space-md backdrop-blur-sm rounded-2xl">
        {foodCategories.map((val) => {
          const isSelected = val.name === category;

          return (
            <Label
              key={val.name}
              className={cn(
                "has-focus-visible:outline-2 rounded-t-2xl relative flex items-center gap-space-sm px-space-sm py-space-sm cursor-pointer transition-colors",
                isSelected ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <RadioGroupItem value={val.name} className="sr-only"/>

              <div className="flex items-center gap-space-sm z-10">
                <img
                  src={val.iconSrc}
                  alt={val.name}
                  className={cn(
                    "size-10 rounded-full transition-all duration-300",
                    isSelected
                      ? "grayscale-0 scale-110"
                      : "grayscale opacity-70",
                  )}
                />
                <span className="capitalize font-semibold text-base">
                  {val.name}
                </span>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                  initial={false}
                />
              )}
            </Label>
          );
        })}
      </div>
    </RadioGroup>
  );
}
