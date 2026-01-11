import { cn } from "../lib/utils";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Cookie, CupSoda, Dessert, Hamburger } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const CATEGORIES = [
  { name: "burgers", icon: Hamburger },
  { name: "drinks", icon: CupSoda },
  { name: "sides", icon: Cookie },
  { name: "deserts", icon: Dessert },
];

const DEFAULT_CATEGORY = "burgers";

// TODO: Add animations when changing tabs
export default function FoodTabs() {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  return (
    <RadioGroup
      value={category}
      onValueChange={(category) => setCategory(category)}
    >
      <div className="flex flex-col gap-lg">
        {CATEGORIES.map((val) => {
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
