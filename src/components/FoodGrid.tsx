export default function FoodGrid() {
  return (
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
  );
}
