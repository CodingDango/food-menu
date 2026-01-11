import { FlameIcon } from "lucide-react";

export default function FoodHero() {
  return (
    <div className="bg-card grid grid-cols-[1fr_300px] p-lg rounded-2xl gap-sm  ">
      <div className="space-y-md">
        <h2 className="text-3xl font-medium ">Veggie Burger</h2>
        <p className="text-muted-foreground">
          A delectable patty filled with potatoes, peas, carrots and tasty
          Indian spices. Topped with crispy lettuce and mayo.
        </p>
        <div className="bg-secondary rounded-2xl overflow-hidden justify-between inline-block">
          <div className="flex">
            <div className="py-md flex flex-col gap-xs">
              <div className="px-lg">
                <div className="flex flex-col items-center">
                  <FlameIcon />
                  <span className="font-medium">Energy</span>
                </div>
                <span className="text-xl font-medium text-primary">
                  334 kCal
                </span>
              </div>
            </div>
            <div className="py-md flex flex-col gap-xs">
              <div className="px-lg">
                <div className="flex flex-col items-center">
                  <FlameIcon />
                  <span className="font-medium">Energy</span>
                </div>
                <span className="text-xl font-medium text-primary">
                  334 kCal
                </span>
              </div>
            </div>
            <div className="py-md flex flex-col gap-xs">
              <div className="px-lg">
                <div className="flex flex-col items-center">
                  <FlameIcon />
                  <span className="font-medium">Energy</span>
                </div>
                <span className="text-xl font-medium text-primary">
                  334 kCal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <div className="w-full md:w-[300px] h-[250px] relative flex-shrink-0">
          <img
            src="/burger.png"
            alt="Burger"
            className="w-full h-full object-contain drop-shadow-xl scale-125"
          />
          <span className="rounded-full px-md p-1 absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl text-primary-foreground bg-primary font-medium self-center">
            5.99 $
          </span>
        </div>
      </div>
    </div>
  );
}
