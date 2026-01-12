import type { Food } from "../types/types";

export default function FoodGrid({ foods }: { foods: Food[] }) {
  return (
    <div className="grid grid-cols-3 gap-lg flex-wrap">
      {foods.map((food) => (
        <div className="bg-card p-lg pt-xs rounded-2xl flex flex-col items-center gap-lg">
          <div className="w-[150px] h-[100px]">
            <img
              src={food.imageSrc}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <div className="w-full flex flex-col items-center gap-xs">
            <p className="font-medium text-xl text-center capitalize">
              {food.name}
            </p>

            <span className="text-2xl text-primary font-bold">{food.price} $</span>
          </div>
        </div>
      ))}
    </div>
  );
}
