import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { FlameIcon, Plus } from "lucide-react"; // Make sure you have lucide-react (standard in shadcn)

// I AM THE DESIGNER. HERE IS YOUR DATA.
const categories = ["Burgers", "Sides", "Drinks"];

const products = [
  {
    id: 1,
    category: "Burgers",
    name: "Double Smash",
    price: "$14.00",
    desc: "Two beef patties, american cheese, pickles, house sauce.",
    tag: "Popular",
    color: "bg-orange-100", // Fake placeholder color for image
  },
  {
    id: 2,
    category: "Burgers",
    name: "Crispy Chicken",
    price: "$12.50",
    desc: "Fried chicken thigh, spicy mayo, lettuce, brioche bun.",
    tag: "New",
    color: "bg-yellow-100",
  },
  {
    id: 3,
    category: "Sides",
    name: "Truffle Fries",
    price: "$6.00",
    desc: "Crispy shoestring fries with parmesan and truffle oil.",
    tag: null,
    color: "bg-stone-200",
  },
  {
    id: 4,
    category: "Drinks",
    name: "Vanilla Shake",
    price: "$5.00",
    desc: "Real vanilla bean ice cream, whipped cream.",
    tag: "Sweet",
    color: "bg-blue-100",
  },
];

export default function Menu() {
  return (
    <div className="p-2xl grid place-items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col gap-2xl">
          <h1 className="font-medium text-4xl leading-normal">
            <span className="text-primary">Menu</span> That Always <br /> Will
            Make You Fall In Love
          </h1>

          <div className="grid grid-cols-[1fr_3fr] gap-2xl">
            <div className="flex flex-col gap-lg">
              <div className="bg-primary text-primary-foreground font-medium rounded-2xl px-md py-sm shadow-lg shadow-primary/25 flex gap-lg items-center">
                <div className="w-10 h-10 bg-white rounded-full"></div>Burgers
              </div>
              <div className="bg-white font-medium rounded-2xl px-md py-sm  flex gap-lg items-center">
                <div className="w-10 h-10 bg-background rounded-full"></div>
                Beverages
              </div>
              <div className="bg-white font-medium rounded-2xl px-md py-sm  flex gap-lg items-center">
                <div className="w-10 h-10 bg-background rounded-full"></div>
                Snacks
              </div>
            </div>

            <div className="flex flex-col gap-lg">
              <div className="bg-card grid grid-cols-[1fr_300px] p-lg rounded-2xl gap-sm  ">
                <div className="space-y-md">
                  <h2 className="text-3xl font-medium ">Veggie Burger</h2>
                  <p className="text-muted-foreground">
                    A delectable patty filled with potatoes, peas, carrots and
                    tasty Indian spices. Topped with crispy lettuce and mayo.
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

              <div className="grid grid-cols-3 gap-lg flex-wrap">
                <div className="bg-card p-lg rounded-2xl flex flex-col items-center gap-lg">
                  
                    <div className="w-[150px] h-[100px]">
                      <img src="/burger.png" className="object-contain drop-shadow-2xl" />
                    </div>

                    <p className="font-medium text-lg text-center">Chicken Burger</p>
                </div>

                <div className="bg-card p-lg rounded-2xl flex flex-col gap-lg items-center">
                  
                    <div className="w-[150px] h-[100px]">
                      <img src="/burger.png" className="object-contain drop-shadow-2xl" />
                    </div>

                    <p className="font-medium text-lg text-center">Chicken Burger</p>
                </div>
                <div className="bg-card p-lg rounded-2xl flex flex-col gap-lg items-center">
                  
                    <div className="w-[150px] h-[100px]">
                      <img src="/burger.png" className="object-contain drop-shadow-2xl" />
                    </div>

                    <p className="font-medium text-lg text-center">Chicken Burger</p>
                </div>
                <div className="bg-card p-lg rounded-2xl flex flex-col gap-lg items-center">
                  
                    <div className="w-[150px] h-[100px]">
                      <img src="/burger.png" className="object-contain drop-shadow-2xl" />
                    </div>

                    <p className="font-medium text-lg text-center">Chicken Burger</p>
                </div>

              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
