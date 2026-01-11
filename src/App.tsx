import FoodTabs from "./components/FoodTabs";
import FoodHero from "./components/FoodHero";
import FoodGrid from "./components/FoodGrid";
import MenuHeading from "./components/MenuHeading";

export default function Menu() {
  return (
    <div className="p-2xl grid place-items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col gap-2xl">
          <MenuHeading/>

          <div className="grid grid-cols-[1fr_3fr] gap-2xl">
            <FoodTabs/>

            <div className="flex flex-col gap-lg">
              <FoodHero/>
              <FoodGrid/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
