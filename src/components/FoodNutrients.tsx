// import { nutrientIcons } from "../lib/nutrients/icons";

// export default function FoodNutrients({ nutrients }: {nutrients: Nutrient[]} ) {
//   return (
//     <div className="bg-secondary rounded-2xl overflow-hidden justify-between inline-block">
//       <div className="grid grid-cols-3">
//         {nutrients.map((nutrient) => {
//           const Icon = nutrientIcons[nutrient.name];

//           return (
//             <div className="py-space-md flex flex-col gap-space-sm items-center text-center">
//               <div className="px-space-lg font-semibold">
//                 <div className="flex flex-col items-center">
//                   {<Icon size={22} />}
//                   <span className="capitalize">{nutrient.name}</span>
//                 </div>
//                 <span className="text-xl text-primary">{nutrient.value}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
