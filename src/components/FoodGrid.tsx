import type { MenuItem } from "../types/types";
import FoodCard from "./FoodCard";

export default function FoodGrid({ foods }: { foods: MenuItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space-lg flex-wrap">
      {foods.map((food) => (
        <FoodCard food={food}/>
      ))}
    </div>
  );
}
